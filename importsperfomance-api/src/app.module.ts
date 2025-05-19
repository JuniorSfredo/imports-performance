import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './modules/person/person.module';
import { ClientModule } from './modules/client/client.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { DatabaseModule } from './common/database/database.module';
import { AutoPartModule } from './modules/auto-part/auto-part.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { AuthModule } from './modules/auth/auth.module';
import { HashModule } from './modules/hash/hash.module';
import { HashService } from './modules/hash/hash.service';
import { OrderServiceModule } from './modules/order-service/order-service.module';

@Module({
  imports: [
    PersonModule,
    ClientModule,
    VehicleModule,
    DatabaseModule.forRoot(),
    AutoPartModule,
    EmployeeModule,
    AuthModule,
    HashModule,
    OrderServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService, HashService],
})
export class AppModule {}
