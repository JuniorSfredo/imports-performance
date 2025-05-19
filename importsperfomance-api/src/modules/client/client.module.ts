import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { ClientRepository } from './persistence/client.repository';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { HashModule } from '../hash/hash.module';

@Module({
  imports: [DatabaseModule.forRoot(), HashModule],
  providers: [ClientRepository, ClientService],
  controllers: [ClientController],
  exports: [ClientService],
})
export class ClientModule {}
