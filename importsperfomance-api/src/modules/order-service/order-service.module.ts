import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { OrderServiceService } from './order-service.service';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceRepository } from './persistence/order-service.repository';

@Module({
  imports: [DatabaseModule.forRoot()],
  providers: [OrderServiceService, OrderServiceRepository],
  controllers: [OrderServiceController],
})
export class OrderServiceModule {}
