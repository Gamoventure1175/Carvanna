import { z } from "zod";
import { CarSchema, UserSchema } from "../generated";

export const ExtendedUserSchema = UserSchema.extend({
  id: z.string().nonempty({ message: "User ID cannot be empty" }).cuid(),
  email: z
    .string()
    .nonempty({ message: "Email cannot be nonempty" })
    .email({ message: "Invalid email format" }),
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
    })
    .nullable(),
  username: z
    .string()
    .nonempty({ message: "Username cannot be empty" })
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must not exceed 20 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    }),
  name: z
    .string()
    .nonempty({ message: "Name cannot be empty" })
    .max(50, { message: "Name must not exceed 50 characters" })
    .nullable()
    .default(null),
  phone: z
    .string()
    .nonempty({ message: "Phone number cannot be empty" })
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Phone number must be a valid international number",
    })
    .nullable()
    .default(null),
  location: z
    .string()
    .nonempty({ message: "Location cannot be empty" })
    .max(100, { message: "Location must not exceed 100 characters" })
    .nullable()
    .default(null),
  driversLicense: z
    .string()
    .nonempty({ message: "Driver's license cannot be empty" })
    .regex(/^[A-Z0-9-]+$/, {
      message:
        "Driver's license must only contain uppercase letters, numbers, and hyphens",
    })
    .nullable()
    .default(null),
  profileImageUrl: z
    .string()
    .nonempty({ message: "Image Url cannot be empty" })
    .url({ message: "Profile image URL must be a valid URL" })
    .nullable()
    .default(null),
  role: z
    .string()
    .refine((val) => ["USER", "ADMIN"].includes(val), {
      message: "Role must be one of USER or ADMIN",
    })
    .default("USER"),
  oauthOnly: z.boolean().default(false),
  onBoarded: z.boolean().default(false),
  emailVerified: z
    .date()
    .nullable()
    .default(() => new Date()),
});

export type ExtendedUserType = z.infer<typeof ExtendedUserSchema>;

export const ExtendedCarSchema = CarSchema.extend({
  id: z.string().nonempty({ message: "User ID cannot be empty" }).cuid(),
  brand: z
    .string()
    .nonempty({ message: "Brand name cannot be empty" })
    .min(2, "Brand name must be at least 2 characters long")
    .max(50, "Brand name must be at most 50 characters long")
    .regex(/^[A-Za-z\s]+$/, "Brand name must only contain letters and spaces"),
  model: z
    .string()
    .nonempty({ message: "Model name cannot be empty" })
    .min(1, "Model name must be at least 1 character long")
    .max(50, "Model name must be at most 50 characters long"),
  year: z.coerce
    .number()
    .int("Year must be an integer")
    .nonnegative()
    .min(1886, "Year must be no earlier than 1886")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  licensePlate: z
    .string()
    .nonempty({ message: "License plate cannot be empty" })
    .min(1, "License plate cannot be empty")
    .max(15, "License plate must be at most 15 characters long")
    .regex(
      /^[A-Za-z0-9\s-]+$/,
      "License plate must only contain alphanumeric characters, spaces, or dashes",
    ),
  color: z
    .string()
    .nonempty({ message: "Color of the car cannot be empty" })
    .regex(/^[A-Za-z\s]+$/, "Color must only contain letters and spaces")
    .max(20, "Color name must be at most 20 characters long"),
  mileage: z.coerce
    .number()
    .int("Mileage must be an integer")
    .min(0, "Mileage cannot be negative"),
});

export type ExtendedCarType = z.infer<typeof ExtendedCarSchema>;
