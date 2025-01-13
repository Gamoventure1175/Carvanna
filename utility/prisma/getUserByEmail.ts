import { ExtendedUserSchema, ExtendedUserType } from "@/validation/customValidations"
import prisma from "@/lib/prisma"
import validateWithSchema from "../zod/validateWithSchema"
import { z } from "zod"

const userSelectFields = {
    id: true,
    email: true,
    emailVerified: true,
    username: true,
    password: true,
    isVerified: true,
    role: true,
    createdAt: true,
    updatedAt: true,
    name: true,
    bio: true,
    driversLicense: true,
    profileImageUrl: true,
    gender: true,
    dateOfBirth: true,
    phone: true,
    location: true,
}

const EmailSchema = ExtendedUserSchema.shape.email //Use z.shape when you want the zod validation only for a specific field

export default async function getUserByEmail(email: unknown){
    const validatedEmail = validateWithSchema(EmailSchema, email); //Using the validation utility checking function

    const user:ExtendedUserType | null = await prisma.user.findUnique({
        where: {email: validatedEmail.data},
        select: userSelectFields
    })

    if(!user) throw new Error('User does not exist')

    const ValidatedUser = validateWithSchema(ExtendedUserSchema, user)

    return ValidatedUser
}