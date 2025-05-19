import { Config } from './config.type';
import { configSchema } from './config.schema';

export const factory = (): Config => {
  const result = configSchema.safeParse({
    database: {
      host: process.env.DATABASE_HOST,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_SCHEMA,
      username: process.env.DATABASE_USERNAME,
      port: 3306,
    },
  });

  if (result.success) return result.data;
  throw new Error();
};
