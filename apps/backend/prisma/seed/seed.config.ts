import { PrismaClient } from '@prisma/client';
import { SeedPrisma } from '@snaplet/seed/adapter-prisma';
import { defineConfig } from '@snaplet/seed/config';

export default defineConfig({
  adapter: () => {
    const client = new PrismaClient();
    return new SeedPrisma(client);
  },
  select: ['!*_prisma_migrations'],
});
