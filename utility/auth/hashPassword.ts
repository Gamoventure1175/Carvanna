import { ExtendedUserSchema } from "@/validation/custom/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";

type UserPasswordType = z.infer<typeof ExtendedUserSchema>["password"];

export default async function hashPassword(
  userPassword: UserPasswordType,
): Promise<string> {
  if (!userPassword) {
    throw new Error("User password not defined.");
  }
  return await bcrypt.hash(userPassword, 10);
}
