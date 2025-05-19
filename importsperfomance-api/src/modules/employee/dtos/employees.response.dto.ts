import { Expose } from 'class-transformer';

export class EmployeesResponseDTO {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  cpf: string;

  @Expose()
  email: string;

  @Expose()
  address: string;

  @Expose()
  phoneNumber: string;
}
