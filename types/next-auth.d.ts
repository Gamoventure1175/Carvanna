import NextAuth, { DefaultSession } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { SessionUserType } from "@/validation/custom/user";

declare module "next-auth" {
  interface Session {
    user: SessionUserType & DefaultSession["user"] & { emailVerified: boolean };
  }

  interface AdapterUser {
    emailVerified: boolean;
  }
}
