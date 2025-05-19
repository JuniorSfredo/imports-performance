import { z } from 'zod';

export const databaseSchema = z.object({
  database: z.string(),
  username: z.string(),
  password: z.string(),
  host: z.string(),
  port: z.coerce.number(),
});

export const configSchema = z.object({
  database: databaseSchema,
});
