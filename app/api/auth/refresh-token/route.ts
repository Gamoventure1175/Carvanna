import { rotateTokens } from "@/app/server-actions/auth/rotateTokens";
import { NextRequest, NextResponse } from "next/server";

export default async function PUT(req: NextRequest) {
  try {
    const { refreshToken } = await req.json();

    if (!refreshToken) {
      return NextResponse.json(
        { error: "Invalid refresh token" },
        { status: 401 }
      );
    }

    const newTokens = await rotateTokens(refreshToken);

    return NextResponse.json({ newTokens }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 500 }
    );
  }
}
