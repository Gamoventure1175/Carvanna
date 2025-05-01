import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { parsedEnv } from "./validation/custom/env";

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const pathname = req.nextUrl.pathname;

  if (!token) {
    const signInUrl = new URL("/auth/signin", req.url);
    signInUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(signInUrl);
  }

  const onBoarded = token.onBoarded as Boolean;

  if (!onBoarded) {
    if (!pathname.includes("/onboarding")) {
      return NextResponse.redirect(new URL("/onboarding", req.url));
    }
  } else {
    if (pathname.includes("/onboarding")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/cars/:path*",
    "/dashboard/:path*",
    "/onboarding/:path*",
    "/profile/:path*",
  ],
};
