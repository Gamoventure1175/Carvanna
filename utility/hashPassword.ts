import { ExtendedUserSchema } from "@/validation/customValidations";
import { z } from "zod";
import bcrypt from 'bcryptjs';

type UserPasswordType = z.infer<typeof ExtendedUserSchema>['password'];

export default async function hashPassword(userPassword: UserPasswordType):Promise<string> {
    return await bcrypt.hash(userPassword, 10)
}