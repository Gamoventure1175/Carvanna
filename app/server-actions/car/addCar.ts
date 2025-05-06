"use server";

import { auth } from "@/lib/auth/authSetup";
import prisma from "@/lib/prisma/prisma";
import validateWithSchema from "@/utility/zod/validateWithSchema";
import { CarForm, CarFormType } from "@/validation/custom/car";

export default async function addCarAction(data: CarFormType) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unuthorised");
  }

  const validatedCarData = validateWithSchema(CarForm, data);

  try {
    const car = await prisma.car.create({
      data: {
        ...validatedCarData,
        ownerId: session.user.id,
      },
    });

    if (process.env.NODE_ENV === "development") {
      console.log("Successfully created car", car);
    }

    return car;
  } catch (err) {
    console.error("Error creating car:", err);
    throw new Error("Could not add the car. Please try again.");
  }
}
