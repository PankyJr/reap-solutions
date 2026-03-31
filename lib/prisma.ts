/**
 * Prisma stub for builds without a database (e.g. Vercel).
 * Returns empty/static data so the app builds and runs. Replace with real PrismaClient when you have a DB.
 */

const mockService = {
  findMany: async () => [] as { slug: string; updatedAt: Date }[],
  findUnique: async () => null as { title?: string; summary?: string } | null,
}

const mockResource = {
  findMany: async () => [] as { slug: string; updatedAt: Date }[],
}

export const prisma = {
  service: mockService,
  resource: mockResource,
}
