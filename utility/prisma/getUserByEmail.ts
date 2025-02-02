import { ExtendedUserSchema, ExtendedUserType } from "@/validation/customValidations"
import prisma from "@/lib/prisma"
import validateWithSchema from "../zod/validateWithSchema"

const userSelectFields = {
    id: true,
    email: true,
    emailVerified: true,
    username: true,
    password: true,
    oauthOnly: true,
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

    if(!user) return null

    const ValidatedUser = validateWithSchema(ExtendedUserSchema, user)

    //Loggin the user data
    if (process.env.NODE_ENV !== "production") {
        console.log({ "Validated User": ValidatedUser.data });
    }
    return ValidatedUser
}