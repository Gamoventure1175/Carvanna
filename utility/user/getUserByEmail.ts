import {
  ExtendedUserSchema,
  ExtendedUserType,
} from "@/validation/custom/schemas";
import {prisma} from "@/lib/prisma/prisma";
import validateWithSchema from "../zod/validateWithSchema";
import { emailSchema } from "@/validation/custom/emailValidation";

const userSelectFields = {
  id: true,
  email: true,
  emailVerified: true,
  username: true,
  password: true,
  onBoarded: true,
  oauthOnly: true,
  isVerified: true,
  role: true,
  createdAt: true,
  updatedAt: true,
  name: true,
  driversLicense: true,
  profileImageUrl: true,
  phone: true,
  location: true,
};

export default async function getUserByEmail(email: unknown) {
  const validatedEmail = validateWithSchema(emailSchema, email);

  const user: ExtendedUserType | null = await prisma.user.findUnique({
    where: { email: validatedEmail },
    select: userSelectFields,
  });

  if (!user) return null;

  const ValidatedUser = validateWithSchema(ExtendedUserSchema, user);

  //Loggin the user data for development server only
  if (process.env.NODE_ENV !== "production") {
    console.log({ "Validated User": ValidatedUser });
  }
  return ValidatedUser;
}
