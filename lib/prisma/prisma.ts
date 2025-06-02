// lib/db.ts or lib/prisma.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // Ensure proper typing and global singleton
  var prisma: PrismaClient | undefined;
}

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
