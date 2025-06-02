import { revokeRefreshToken } from "@/app/server-actions/auth/tokens/revokeTokens";
import { auth } from "@/lib/auth/authSetup";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const session = await auth();

  if (session?.user) {
    await revokeRefreshToken(session.user.accessToken);
  }

  return NextResponse.json(
    { message: "Logged out successfully" },
    { status: 200 }
  );
}
