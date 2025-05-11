import { auth } from "@/lib/auth/authSetup";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  if (!session || !session.user?.accessToken) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json(session);
}
