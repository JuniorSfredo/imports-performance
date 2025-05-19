import { Expose, Type } from 'class-transformer';
import { ClientSummaryDTO } from '../../../client/dtos/client.summary.dto';

export class VehicleResponseDTO {
  @Expose()
  id: number;

  @Expose()
  make: string;

  @Expose()
  vehicleType: string;

  @Expose()
  vehiclePlate: string;

  @Expose()
  color: string;

  @Expose()
  year: number;

  @Expose()
  mileage: number;

  @Expose()
  @Type(() => ClientSummaryDTO)
  client: ClientSummaryDTO;
}
