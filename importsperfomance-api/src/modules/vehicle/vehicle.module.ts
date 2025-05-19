import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { VehicleService } from './vehicle.service';
import { VehicleRepository } from './persistence/vehicle.repository';
import { VehicleController } from './vehicle.controller';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [DatabaseModule.forRoot(), ClientModule],
  providers: [VehicleService, VehicleRepository],
  controllers: [VehicleController],
})
export class VehicleModule {}
