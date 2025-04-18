import prisma from "@/lib/prisma/prisma";

export async function revokeRefreshToken(refreshToken: string) {
  await prisma.session.delete({
    where: { sessionToken: refreshToken },
  });
}
