import { z } from "zod";
import { ExtendedUserSchema } from "./schemas";

export const signUpSchema = ExtendedUserSchema.pick({
  email: true,
  username: true,
  password: true,
}).extend({
  //This is only to make the password non-nullable instead of the default nullable from the original User Schema and to add an otp
  password: z
    .string()
    .nonempty({ message: "Password cannot be empty" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&]/, {
      message:
        "Password must contain at least one special character (@, $, !, %, *, ?, &)",
    }),
});

export const signUpStepsSchema = [
  z.object({ username: signUpSchema.shape.username }),
  z.object({ password: signUpSchema.shape.password }),
  z.object({ email: signUpSchema.shape.email }),
];

export const profileSchema = ExtendedUserSchema.omit({
  emailVerified: true,
  id: true,
  oauthOnly: true,
  role: true,
  createdAt: true,
  updatedAt: true,
  email: true,
  username: true,
  password: true,
});

export const otpSchema = z.object({
  otp: z
    .string()
    .nonempty({ message: "OTP cannot be empty" })
    .length(6, { message: "OTP must be exactly 6 digits" })
    .regex(/^\d{6}$/, { message: "OTP must contain only digits" }),
});

export type otpSchemaType = z.infer<typeof otpSchema>;
export type signUpSchemaType = z.infer<typeof signUpSchema>;
export type profileSchemaType = z.infer<typeof profileSchema>;
