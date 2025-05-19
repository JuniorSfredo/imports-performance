import { Expose } from 'class-transformer';

export class VehicleIdDTO {
  @Expose()
  id: number;
}
