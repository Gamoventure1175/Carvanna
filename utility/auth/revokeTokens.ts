import prisma from "@/lib/prisma";

async function revokeRefreshToken(refreshToken: string) {
    await prisma.session.delete({
      where: { sessionToken: refreshToken },
    });
  }
  