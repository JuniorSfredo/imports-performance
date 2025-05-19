import { Exclude, Expose } from 'class-transformer';

export class ClientsResponseDTO {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  cpf: string;

  @Expose()
  address: string;

  @Expose()
  phoneNumber: string;

  @Exclude()
  password: string;
}
