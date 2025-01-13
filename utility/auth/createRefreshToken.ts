import prisma from "@/lib/prisma";
import {sign} from 'jsonwebtoken';
import { UserSchema } from "@/validation/generated";
import { z } from "zod";

type UserIdType = z.infer<typeof UserSchema.shape.id>

async function createRefreshToken(userId: UserIdType) {
    
    const secret = process.env.JWT_SECRET
    if (!secret) {
        throw new Error('JWT secret not defined in the environment variables')
    }

    const refreshToken = sign({ userId }, secret, {
        expiresIn: "7d",
    });

    await prisma.session.create({
        data: {
        userId,
        sessionToken: refreshToken,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
    });

    return refreshToken;
}


export default createRefreshToken;