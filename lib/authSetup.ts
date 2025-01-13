import NextAuth, {NextAuthConfig} from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { ExtendedUserSchema, ExtendedUserType } from "@/validation/customValidations";
import bcrypt from 'bcryptjs';
import validateWithSchema from "@/utility/zod/validateWithSchema";
import getUserByEmail from "@/utility/prisma/getUserByEmail";
import linkOAuth from "@/app/server-actions/auth/linkOAuth";
import { z } from "zod";
import { ZodError } from "zod-validation-error";

export const AuthCredentials = ExtendedUserSchema.pick({email: true, password: true, username: true}); 
//can be used later on when entering user credentials in the frontend


export const authOptions:NextAuthConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider,
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: 'Username', type: 'text'},
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: 'password'},
            },
            async authorize(credentials) {
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

                if(!user.data.emailVerified) throw new Error('Email is not verified')

                const validPassword = await bcrypt.compare(
                    validatedCredentials.data?.password ?? '',  
                    user.data.password
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
                const providerEmail = profile?.email ?? 'null';
                
                const user = await getUserByEmail(providerEmail)

                if (user) {
                    const accountLinked = linkOAuth(account,user.data)

                    return true
                }
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