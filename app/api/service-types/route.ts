import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma/lazyLoadPrisma";

export async function GET(req: NextRequest) {
  try {
    const serviceTypes = await prisma.serviceType.findMany();
    return NextResponse.json(serviceTypes);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch service types" },
      { status: 500 }
    );
  }
}
