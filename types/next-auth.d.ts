import NextAuth, { AdapterUser } from "next-auth";
import { SessionUserType } from "@/validation/custom/user";

declare module "next-auth" {
  interface Session {
    user: SessionUserType;
  }

  interface AdapterUser {
    emailVerified?: boolean;
  }
}
