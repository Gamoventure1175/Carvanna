"use server";
import {prisma} from "@/lib/prisma/prisma";
import hashPassword from "@/utility/auth/hashPassword";
import getUserByEmail from "@/utility/user/getUserByEmail";
import validateWithSchema from "@/utility/zod/validateWithSchema";
import { signUpSchema, signUpSchemaType } from "@/validation/custom/signUp";

export default async function SignUpAction(data: signUpSchemaType) {
  const validatedData = validateWithSchema(signUpSchema, data);
  const existingUser = await getUserByEmail(validatedData.email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashPassword(validatedData.password);

  const newUser = await prisma.user.create({
    data: {
      email: validatedData.email,
      username: validatedData.username,
      password: hashedPassword,
      role: "USER",
      oauthOnly: false,
      isVerified: false,
      onBoarded: false,
      name: null,
      driversLicense: null,
      profileImageUrl: null,
      phone: null,
      location: null,
      emailVerified: new Date(),
    },
  });

  if (!newUser) {
    throw new Error("Could not create a new user");
  }

  return { success: true, newUser };
}
