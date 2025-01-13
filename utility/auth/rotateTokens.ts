import prisma from "@/lib/prisma";
import { sign } from "jsonwebtoken";

async function rotateTokens(refreshToken: string) {
    const session = await prisma.session.findUnique({
      where: { sessionToken: refreshToken },
    });

    const secret = process.env.JWT_SECRET
    if (!secret) {
        throw new Error('JWT secret not defined in the environment variables')
    }
  
    if (!session) throw new Error("Invalid refresh token");
  
    const user = await prisma.user.findUnique({ where: { id: session.userId } });
    if (!user) throw new Error("User not found");
  
    const newAccessToken = sign(
      { userId: user.id, role: user.role },
      secret,
      { expiresIn: "15m" }
    );
  
    const newRefreshToken = sign({ userId: user.id }, secret, {
      expiresIn: "7d",
    });
  
    await prisma.session.update({
      where: { sessionToken: refreshToken },
      data: { sessionToken: newRefreshToken },
    });
  
    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  }
  