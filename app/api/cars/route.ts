import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/authSetup";
import { getUserCars } from "@/app/server-actions/car/getUserCars";

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ message: "Unauthorised" }, { status: 401 });
    }

    const ownerId = session.user.id;

    const data = await getUserCars(ownerId);

    if (data.length === 0)
      return NextResponse.json(
        { message: "Could not get the cars" },
        { status: 404 },
      );

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
