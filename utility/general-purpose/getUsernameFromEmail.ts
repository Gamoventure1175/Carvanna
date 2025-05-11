import { emailSchema } from "../../validation/custom/emailValidation";
import validateWithSchema from "../zod/validateWithSchema";

export default function getUsernameFromEmail(email: string): string {
  const validatedEmail = validateWithSchema(emailSchema, email);
  const username = validatedEmail.split("@")[0];

  if (username.includes("@")) {
    throw new Error("Could not get username from the email");
  }

  return username;
}
