import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { DataSourceOptions } from 'typeorm';
import { createMySQLDatabase } from 'typeorm-extension';

import { ConfigService } from '../config/config.service';
import { DatabaseModule } from './database.module';
import { TypeOrmMigrationService } from './typeorm-migration.service';

const createDatabaseModule = async () => {
  return await NestFactory.createApplicationContext(
    DatabaseModule.forRoot({
      migrations: [path.join(__dirname) + '/migrations/*.ts'],
    }),
  );
};

export const migrate = async () => {
  const migrationModule = await createDatabaseModule();
  await migrationModule.init();
  const configService = migrationModule.get<ConfigService>(ConfigService);
  const options = {
    type: 'mysql',
    ...configService.get('database'),
  } as DataSourceOptions;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  await createMySQLDatabase({
    ifNotExist: true,
    options,
  });
  await migrationModule.get(TypeOrmMigrationService).migrate();
};

export const getDataSource = async () => {
  const migrationModule = await createDatabaseModule();
  return migrationModule.get(TypeOrmMigrationService).getDataSource();
};
