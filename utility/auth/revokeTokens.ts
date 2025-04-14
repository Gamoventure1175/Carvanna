import prisma from "@/lib/prisma";

export async function revokeRefreshToken(refreshToken: string) {
  await prisma.session.delete({
    where: { sessionToken: refreshToken },
  });
}
