import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../prisma/prisma";
import { ExtendedUserSchema } from "@/validation/custom/schemas";
import bcrypt from "bcryptjs";
import getUserByEmail from "@/utility/user/getUserByEmail";
import linkOAuth from "@/app/server-actions/auth/OAuth/linkOAuth";
import { ZodError } from "zod-validation-error";
import createOAuthAccount from "@/app/server-actions/auth/OAuth/createOAuthAccount";
import validateWithSchema from "@/utility/zod/validateWithSchema";
import { Adapter } from "next-auth/adapters";
import { sign } from "jsonwebtoken";
import { parsedEnv } from "@/validation/custom/env";
import createRefreshToken from "@/app/server-actions/auth/tokens/refreshToken";
import { rotateTokens } from "@/app/server-actions/auth/tokens/rotateTokens";

export const AuthCredentials = ExtendedUserSchema.pick({
  email: true,
  password: true,
  username: true,
});
//can be used later on when entering user credentials in the frontend

//lazy loading
function getPrismaAdapter(): Adapter {
  const { prisma } = require("../prisma/prisma"); // lazy require
  return PrismaAdapter(prisma);
}

export const authOptions: NextAuthConfig = {
  adapter: getPrismaAdapter(),
  debug: true,
  providers: [
    GoogleProvider({
      clientId: parsedEnv.AUTH_GOOGLE_ID,
      clientSecret: parsedEnv.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        //Logging the credentials only when development server
        if (process.env.NODE_ENV !== "production") {
          console.log({ "Received credentials": credentials });
        }

        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const { email, password, username } = credentials;

        const validatedCredentials = AuthCredentials.safeParse({
          email,
          password,
          username,
        });
        if (!validatedCredentials.success) {
          throw new Error("Error validating the fields") as ZodError;
        }

        const credentialsEmail = validatedCredentials.data?.email;

        const user = await getUserByEmail(credentialsEmail);

        if (!user) {
          throw new Error("User does not exist");
        }

        if (!user.password || user.oauthOnly) {
          throw new Error("This account is for Oauth only");
        }

        // if (!user.emailVerified) throw new Error("Email is not verified");

        const validPassword = await bcrypt.compare(
          validatedCredentials.data?.password ?? "",
          user.password
        );

        if (!validPassword) throw new Error("Invalid username or password");
        // return {
        //   ...user,
        //   id: String(user.id)
        // }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const providerEmail = profile?.email;

        if (!providerEmail)
          throw new Error(
            "Google Provider did not return an email. Email is required for siging in with Oauth"
          );

        const user = await getUserByEmail(providerEmail);

        if (!user) {
          const createdOauthAccount = await createOAuthAccount(
            account,
            profile
          ); //Creating a whole new account based on the OAuth user and account if the user does not exist already

          //Loggin the newly created OAuth user account
          if (process.env.NODE_ENV !== "production") {
            console.log({
              "Created a new OAuth user account": createdOauthAccount,
            });
          }

          return true;
        }

        if (user) {
          const linkedAccount = await prisma.account.findUnique({
            where: {
              provider_providerAccountId: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              },
              userId: user.id,
            },
          });

          if (!linkedAccount) {
            const createdLinkedAccount = await linkOAuth(account, user); //Creating a link between the accounts if it does exist already

            //Loggin the created link between the account
            if (process.env.NODE_ENV !== "production") {
              console.log({ "Created the Link": createdLinkedAccount });
            }

            return true;
          }

          //Loggin the already linked account
          if (process.env.NODE_ENV !== "production") {
            console.log({ "Account already exists": linkedAccount });
          }
          return true;
        }

        return true;
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (user && account) {
        const validatedUser = validateWithSchema(ExtendedUserSchema, user);

        token.id = validatedUser.id;
        token.email = validatedUser.email;
        token.username = validatedUser.username;
        token.role = validatedUser.role;
        token.isVerified = validatedUser.isVerified;
        token.oauthOnly = validatedUser.oauthOnly;
        token.profileImageUrl = validatedUser.profileImageUrl;
        token.emailVerified = validatedUser.emailVerified;
        token.onBoarded = validatedUser.onBoarded;

        token.accessToken = sign(
          { userId: validatedUser.id, role: validatedUser.role },
          parsedEnv.JWT_SECRET,
          { expiresIn: "15m" }
        );

        token.refreshToken = await createRefreshToken(validatedUser.id);
      }

      const isTokenExpired = token.exp && Date.now() / 1000 > token.exp;

      //Rotating the tokens
      if (isTokenExpired && token.refreshToken) {
        const newTokens = await rotateTokens(token.refreshToken as string);
        token.accessToken = newTokens.accessToken;
        token.refreshToken = newTokens.refreshToken;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email as string,
        username: token.username as string,
        role: token.role as string,
        isVerified: token.isVerified as boolean,
        profileImageUrl: token.profileImageUrl as string,
        accessToken: token.accessToken as string,
        oauthOnly: token.oauthOnly as boolean,
        emailVerified: token.emailVerified as Date & boolean,
        onBoarded: token.onBoarded as boolean,
      };
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
