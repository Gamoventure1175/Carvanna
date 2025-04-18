"use server";
import prisma from "@/lib/prisma/prisma";
import hashPassword from "@/utility/auth/hashPassword";
import getUserByEmail from "@/utility/prisma/getUserByEmail";
import validateWithSchema from "@/utility/zod/validateWithSchema";
import { signUpSchema, signUpSchemaType } from "@/validation/custom/signUp";
import bcrypt from "bcryptjs";

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
      name: null,
      bio: null,
      driversLicense: null,
      profileImageUrl: null,
      gender: "MALE",
      dateOfBirth: null,
      phone: null,
      location: null,
    },
  });

  if (!newUser) {
    throw new Error("Could not create a new user");
  }

  return { sucess: true, newUser };
}
