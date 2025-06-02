import {prisma} from "@/lib/prisma/prisma";
import { sign } from "jsonwebtoken";
import { UserSchema } from "@/validation/generated";
import { z } from "zod";
import { parsedEnv } from "@/validation/custom/env";

type UserIdType = z.infer<typeof UserSchema.shape.id>;

async function createRefreshToken(userId: UserIdType) {
  const refreshToken = sign({ userId }, parsedEnv.JWT_SECRET, {
    expiresIn: "7d",
  });

  await prisma.userSession.create({
    data: {
      userId,
      sessionToken: refreshToken,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  return refreshToken;
}

export default createRefreshToken;
