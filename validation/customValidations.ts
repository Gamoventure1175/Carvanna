import { z } from 'zod';
import { CarSchema, UserSchema } from './generated';

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
        .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@, $, !, %, *, ?, &)" })
        .nullable(),
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
        .default(null),
    role: z
        .string()
        .refine((val) => ['USER', 'ADMIN'].includes(val), {
            message: 'Role must be one of USER or ADMIN'
        })
        .default('USER'),
    oauthOnly: z
        .boolean()
        .default(false),
    gender: z
        .string()
        .refine((val) => ["MALE", "FEMALE", "OTHER"].includes(val), {
            message: "Gender must be one of MALE, FEMALE, or OTHER",
        })
        .default('MALE'),
    emailVerified: z
        .boolean()
        .default(false)
});

export type ExtendedUserType = z.infer<typeof ExtendedUserSchema>;


export const ExtendedCarSchema = CarSchema.extend({
    brand: z
        .string()
        .nonempty({message: 'Brand name cannot be empty'})
        .min(2, "Brand name must be at least 2 characters long")
        .max(50, "Brand name must be at most 50 characters long")
        .regex(/^[A-Za-z\s]+$/, "Brand name must only contain letters and spaces"),
    model: z
            .string()
            .nonempty({message: 'Model name cannot be empty'})
            .min(1, "Model name must be at least 1 character long")
            .max(50, "Model name must be at most 50 characters long"),
    year: z
            .number()
            .int("Year must be an integer")
            .nonnegative()
            .min(1886, "Year must be no earlier than 1886")
            .max(new Date().getFullYear(), "Year cannot be in the future"),
    licensePlate: z
            .string()
            .nonempty({message: 'License plate cannot be empty'})
            .min(1, "License plate cannot be empty")
            .max(15, "License plate must be at most 15 characters long")
            .regex(/^[A-Za-z0-9\s-]+$/, "License plate must only contain alphanumeric characters, spaces, or dashes"),
    carImageUrl: z
            .string()
            .nonempty({message: 'Car image url cannot be empty'})
            .url("Car image URL must be a valid URL")
            
            ,
    color: z
            .string()
            .nonempty({message: 'Color of the car cannot be empty'})
            .regex(/^[A-Za-z\s]+$/, "Color must only contain letters and spaces")
            .max(20, "Color name must be at most 20 characters long")
            ,
    engineType: z
            .string()
            .nonempty({message: "Engine type of the car cannot be empty"})
            .max(50, "Engine type must be at most 50 characters long")
            
            ,
    transmission: z
            .string()
            .nonempty({message: 'Transimission type of the car cannot be empty'})
            .max(20, "Transmission type must be at most 20 characters long")
            
            ,
    mileage: z
            .number()
            .int("Mileage must be an integer")
            .min(0, "Mileage cannot be negative")
            
            ,
    registrationState: z
            .string()
            .nonempty({message: "Registration state of the car cannot be empty"})
            .regex(/^[A-Za-z\s]+$/, "Registration state must only contain letters and spaces")
            .max(50, "Registration state must be at most 50 characters long")
            
            ,
    description: z
            .string()
            .nonempty({message: "Description of the car cannot be empty"})
            .max(500, "Description must be at most 500 characters long")
            
            ,
})

export type ExtendedCarType = z.infer<typeof ExtendedCarSchema>