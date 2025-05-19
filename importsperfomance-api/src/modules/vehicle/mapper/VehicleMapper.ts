import { Vehicle } from '../entities/vehicle.entity';
import { plainToInstance } from 'class-transformer';
import { VehicleResponseDTO } from '../dtos/response/vehicle.response.dto';

export class VehicleMapper {
  public static toDTO(vehicle: Vehicle) {
    return plainToInstance(VehicleResponseDTO, vehicle);
  }
}
