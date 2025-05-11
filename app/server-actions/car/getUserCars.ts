"use server";
import prisma from "@/lib/prisma/prisma";

export async function getUserCars(ownerId: string) {
  const cars = await prisma.car.findMany({
    where: {
      ownerId: ownerId,
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
