import { auth } from "@/lib/auth/authSetup";
import { revokeRefreshToken } from "@/app/server-actions/auth/tokens/revokeTokens";
import { NextRequest, NextResponse } from "next/server";

export default async function DELETE(req: NextRequest) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized session" },
        { status: 401 },
      );
    }

    if (session?.user) {
      await revokeRefreshToken(session.user.accessToken as string);
    }

    NextResponse.json({ message: "Logged out successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to logout" }, { status: 500 });
  }
}
