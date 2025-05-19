import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';

@Module({
  imports: [DatabaseModule.forRoot()],
})
export class PaymentModule {}
