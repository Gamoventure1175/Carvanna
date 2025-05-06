import NextAuth, { AdapterUser } from "next-auth";
import { SessionUserType } from "@/validation/custom/sessionUser";

declare module "next-auth" {
  interface Session {
    user: SessionUserType;
  }

  interface AdapterUser {
    id: number;
    emailVerified?: boolean;
  }
}
