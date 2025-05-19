import { Expose } from 'class-transformer';

export class VehiclesSummaryDTO {
  @Expose()
  id: number;

  @Expose()
  make: string;

  @Expose()
  vehicleType: string;
}
