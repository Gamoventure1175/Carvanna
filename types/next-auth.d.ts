import { SessionUserType } from "@/validation/custom/sessionUser";
import NextAuth, {
  DefaultSession,
  DefaultUser,
  DefaultJWT,
  AdapterUser,
} from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      role: string;
      isVerified: boolean;
      oauthOnly: boolean;
      profileImageUrl?: string | null;
      emailVerified: Date | null;
      onBoarded: boolean;
      accessToken: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    username: string;
    role: string;
    isVerified: boolean;
    oauthOnly: boolean;
    profileImageUrl?: string | null;
    emailVerified: Date | null;
    onBoarded: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    username: string;
    role: string;
    isVerified: boolean;
    oauthOnly: boolean;
    profileImageUrl?: string | null;
    emailVerified: Date | null;
    onBoarded: boolean;
    accessToken: string;
    refreshToken: string;
  }
}
