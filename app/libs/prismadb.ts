import { PrismaClient } from '@prisma/client';

// The file is here to prevent multiple instances of the PrismaClient being created by Nextjs 13 hot reloading

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
