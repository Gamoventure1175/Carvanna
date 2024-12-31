import { z } from 'zod';
import { UserSchema } from './generated';

export const ExtendedUserSchema = UserSchema.extend({
    email: z
        .string()
        .nonempty({ message: 'Email cannot be nonempty' })
        .email({ message: 'Invalid email format' }),
    password: z
        .string()
        .nonempty({ message: 'Password cannot be empty' })
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@, $, !, %, *, ?, &)" }),
    username: z
        .string()
        .nonempty({ message: "Username cannot be empty" })
        .min(3, { message: "Username must be at least 3 characters long" })
        .max(20, { message: "Username must not exceed 20 characters" })
        .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" }),
    name: z
        .string()
        .nonempty({ message: "Name cannot be empty" })
        .max(50, { message: 'Name must not exceed 50 characters' })
        .nullable()
        .default(null),
    bio: z
        .string()
        .nonempty({ message: 'Bio cannot be empty' })
        .max(160, { message: "Bio must not exceed 160 characters" })
        .nullable()
        .default(null),
    phone: z
        .string()
        .nonempty({ message: 'Phone number cannot be empty' })
        .regex(/^\+?[1-9]\d{1,14}$/, { message: "Phone number must be a valid international number" })
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
        .regex(/^[A-Z0-9-]+$/, { message: "Driver's license must only contain uppercase letters, numbers, and hyphens" })
        .nullable()
        .default(null),
    profileImageUrl: z
        .string()
        .nonempty({message: 'Image Url cannot be empty'})
        .url({ message: "Profile image URL must be a valid URL" })
        .nullable()
        .default(null),
    dateOfBirth: z
        .coerce.date()
        .nullable()
        .default(null)
});

export type ExtendedUserType = z.infer<typeof ExtendedUserSchema>;
