import prisma from "@/lib/prisma/prisma";

export async function revokeRefreshToken(refreshToken: string) {
  await prisma.userSession.delete({
    where: { sessionToken: refreshToken },
  });
}
