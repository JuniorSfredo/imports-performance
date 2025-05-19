import { DynamicModule, Module } from '@nestjs/common';
import 'dotenv/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { Client } from '../../modules/client/entities/client.entity';
import { Vehicle } from '../../modules/vehicle/entities/vehicle.entity';
import { AutoPart } from '../../modules/auto-part/entities/auto-part.entity';
import { Payment } from '../../modules/payment/entities/payment.entity';
import { OrderService } from '../../modules/order-service/entities/order-service.entity';
import { Employee } from '../../modules/employee/entities/employee.entity';
import { TypeOrmMigrationService } from './typeorm-migration.service';

const entities = [Client, Vehicle, AutoPart, Payment, OrderService, Employee];

@Module({})
export class DatabaseModule {
  static forRoot(opts?: { migrations?: string[] }): DynamicModule {
    const { migrations } = opts || {};
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule.forRoot()],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            return {
              type: 'mysql',
              ...configService.get('database'),
              entities: entities,
              migrations: migrations,
              synchronize: false,
              autoLoadEntities: false,
              migrationsTableName: 'typeorm_migrations',
            };
          },
        }),
        TypeOrmModule.forFeature(entities),
      ],
      providers: [TypeOrmMigrationService],
    };
  }
}
