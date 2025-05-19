import { Controller, Get } from '@nestjs/common';
import { EmployeesResponseDTO } from './dtos/employees.response.dto';
import { EmployeeService } from './employee.service';

@Controller('/employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  public async getAllEmployees(): Promise<EmployeesResponseDTO[]> {
    return await this.employeeService.getAllEmployees();
  }
}
