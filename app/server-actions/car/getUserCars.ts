"use server";

import { auth } from "@/lib/auth/authSetup";
import prisma from "@/lib/prisma/prisma";

export async function getUserCars() {
  const session = await auth();

  if (!session?.user?.id) throw new Error("Unauthorised");

  const cars = await prisma.car.findMany({
    where: {
      ownerId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!cars) {
    throw new Error("Could not find any cars by the user");
  }

  return cars;
}
