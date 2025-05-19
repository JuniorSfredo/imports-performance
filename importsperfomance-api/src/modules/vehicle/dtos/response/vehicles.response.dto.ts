import { Expose } from 'class-transformer';

export class VehiclesResponseDTO {
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
}
