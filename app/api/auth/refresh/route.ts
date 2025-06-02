import { rotateTokens } from "@/app/server-actions/auth/tokens/rotateTokens";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const { refreshToken } = await req.json();

    if (!refreshToken) {
      return NextResponse.json(
        { error: "Invalid refresh token" },
        { status: 401 }
      );
    }

    let newTokens;
    try {
      newTokens = await rotateTokens(refreshToken);
    } catch (tokenError) {
      console.error("Error rotating tokens:", tokenError);
      return NextResponse.json({ error: "Token rotation failed" }, { status: 500 });
    }

    return NextResponse.json(newTokens);
  } catch (error) {
    console.error("Handler error:", error);
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 500 }
    );
  }
}
