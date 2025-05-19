import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { EmployeeRepository } from './persistence/employee.repository';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { HashModule } from '../hash/hash.module';

@Module({
  imports: [DatabaseModule.forRoot(), HashModule],
  providers: [EmployeeRepository, EmployeeService],
  controllers: [EmployeeController],
  exports: [EmployeeService],
})
export class EmployeeModule {}
