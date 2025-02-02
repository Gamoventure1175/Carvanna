import NextAuth, {NextAuthConfig} from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { ExtendedUserSchema } from "@/validation/customValidations";
import bcrypt from 'bcryptjs';
import getUserByEmail from "@/utility/prisma/getUserByEmail";
import linkOAuth from "@/app/server-actions/auth/linkOAuth";
import { ZodError } from "zod-validation-error";
import createOAuthAccount from "@/app/server-actions/auth/createOAuthAccount";

export const AuthCredentials = ExtendedUserSchema.pick({email: true, password: true, username: true}); 
//can be used later on when entering user credentials in the frontend


export const authOptions:NextAuthConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            authorization: {
                params: {
                  scope: "openid email profile",
                },
            },
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: 'Username', type: 'text'},
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: 'password'},
            },
            async authorize(credentials) {
                //Logging the credentials
                if (process.env.NODE_ENV !== "production") {
                    console.log({'Received credentials': credentials})
                }

                if (!credentials) {
                    throw new Error('No credentials provided');
                }

                const {email, password, username} = credentials;

                const validatedCredentials = AuthCredentials.safeParse({email, password,username})
                if (!validatedCredentials.success) {
                    throw new Error('Error validating the fields') as ZodError
                }

                const credentialsEmail = validatedCredentials.data?.email

                const user = await getUserByEmail(credentialsEmail)

                if (!user) {
                    throw new Error('User does not exist')
                }

                if (!user.data?.password || user.data?.oauthOnly) {
                    throw new Error('This account is for Oauth only')
                }

                if(!user.data.emailVerified) throw new Error('Email is not verified')

                const validPassword = await bcrypt.compare(
                    validatedCredentials.data?.password ?? '',  
                    user.data.password,
                );

                if(!validPassword) throw new Error('Invalid username or password')
                return user.data;
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({account,profile}) {
        
            if (account?.provider === 'google') {
                const providerEmail = profile?.email;

                if (!providerEmail) throw new Error('Google Provider did not return an email. Email is required for siging in with Oauth')

                const user = await getUserByEmail(providerEmail)

                if (!user) {
                    const createdOauthAccount = await createOAuthAccount(account, profile) //Creating a whole new account based on the OAuth user and account if the user does not exist already
                    
                    //Loggin the newly created OAuth user account
                    if (process.env.NODE_ENV !== 'production') {
                        console.log({'Created a new OAuth user account': createdOauthAccount})
                    }

                    return true
                }

                if (user) {
                    const linkedAccount = await prisma.account.findUnique({
                        where: {
                            provider_providerAccountId: {
                                provider: account.provider,
                                providerAccountId: account.providerAccountId,
                            },
                            userId: user.data.id,
                        }
                    })
                
                    if (!linkedAccount) {
                        const createdLinkedAccount = await linkOAuth(account,user.data) //Creating a link between the accounts if it does exist already

                        //Loggin the created link between the account
                        if (process.env.NODE_ENV !== 'production') {
                            console.log({'Created the Link': createdLinkedAccount})
                        }

                        return true;
                    }

                    //Loggin the already linked account
                    if (process.env.NODE_ENV !== "production") {
                        console.log({'Account already exists': linkedAccount})
                    }
                    return true;
                }
                
                return true
            }
            return true
        },
        session({session, user, token}) {
            return session
        }
    },
    pages: {

    }   
}

export const {handlers, signIn, signOut, auth} = NextAuth(authOptions)