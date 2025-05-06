import prisma from "@/lib/prisma/prisma";
import { parsedEnv } from "@/validation/custom/env";
import { sign } from "jsonwebtoken";

export async function rotateTokens(refreshToken: string) {
  const session = await prisma.userSession.findUnique({
    where: { sessionToken: refreshToken },
  });

  const secret = parsedEnv.JWT_SECRET;

  if (!session) throw new Error("Invalid refresh token");

  const user = await prisma.user.findUnique({ where: { id: session.userId } });
  if (!user) throw new Error("User not found");

  const newAccessToken = sign({ userId: user.id, role: user.role }, secret, {
    expiresIn: "15m",
  });

  const newRefreshToken = sign({ userId: user.id }, secret, {
    expiresIn: "7d",
  });

  await prisma.userSession.update({
    where: { sessionToken: refreshToken },
    data: {
      sessionToken: newRefreshToken,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60),
    },
  });

  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
}
