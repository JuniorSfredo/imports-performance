import { DefaultRepository } from '../../../common/database/repository/default.repository';
import { Employee } from '../entities/employee.entity';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeRepository extends DefaultRepository<Employee> {
  constructor(manager: EntityManager) {
    super(Employee, manager);
  }

  async findAll(): Promise<Employee[]> {
    return this.manager.find(Employee);
  }

  async findById(id: number): Promise<Employee> {
    const employee = await this.manager.findOne(Employee, {
      where: { id: id },
    });

    if (!employee) throw new Error('Employee not found');
    return employee;
  }

  async findByEmail(email: string): Promise<Employee | null> {
    return this.manager.findOne(Employee, {
      where: { email },
    });
  }
}
