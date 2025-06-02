import prisma from "@/lib/prisma/lazyLoadPrisma";

export async function revokeRefreshToken(refreshToken: string) {
  await prisma.userSession.delete({
    where: { sessionToken: refreshToken },
  });
}
