import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './persistence/employee.repository';
import { EmployeesResponseDTO } from './dtos/employees.response.dto';
import { plainToInstance } from 'class-transformer';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async getAllEmployees(): Promise<EmployeesResponseDTO[]> {
    const employees = await this.employeeRepository.findAll();
    return employees.map((employee) =>
      plainToInstance(EmployeesResponseDTO, employee),
    );
  }

  public async findEmployeeByEmail(email: string): Promise<Employee | null> {
    return await this.employeeRepository.findByEmail(email);
  }
}
