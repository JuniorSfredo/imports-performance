import { Exclude, Expose, Type } from 'class-transformer';
import { VehiclesSummaryDTO } from '../../vehicle/dtos/summary/vehicles.summary.dto';

export class ClientResponseDTO {
  @Expose()
  id: number;

  @Expose()
  name: string;

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

  @Expose()
  @Type(() => VehiclesSummaryDTO)
  vehicles: VehiclesSummaryDTO[];
}
