import { NextResponse } from "next/server";
import prisma from "@/lib/prisma/prisma";

export async function GET() {
  try {
    const serviceTypes = await prisma.serviceType.findMany();
    return NextResponse.json(serviceTypes);
  } catch (error) {
    console.error(error);
    return new NextResponse("Failed to fetch service types", { status: 500 });
  }
}
