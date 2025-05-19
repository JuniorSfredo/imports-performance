import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleRepository } from './persistence/vehicle.repository';
import { plainToInstance } from 'class-transformer';
import { VehiclesResponseDTO } from './dtos/response/vehicles.response.dto';
import { VehicleResponseDTO } from './dtos/response/vehicle.response.dto';
import { VehicleRequestDTO } from './dtos/request/vehicle.request.dto';
import { Vehicle } from './entities/vehicle.entity';
import { VehicleIdDTO } from './dtos/response/vehicle.id.dto';
import { ClientService } from '../client/client.service';
import { VehicleMapper } from './mapper/VehicleMapper';

@Injectable()
export class VehicleService {
  constructor(
    private readonly vehicleRepository: VehicleRepository,
    private readonly clientService: ClientService,
  ) {}

  public async getAllVehicles(): Promise<VehiclesResponseDTO[]> {
    const vehicles = await this.vehicleRepository.findAll();
    return vehicles.map((vehicle) =>
      plainToInstance(VehiclesResponseDTO, vehicle, {
        excludeExtraneousValues: true,
      }),
    );
  }

  public async getVehicleById(id: number): Promise<VehicleResponseDTO> {
    const vehicle = await this.vehicleRepository.findById(id);
    return plainToInstance(VehicleResponseDTO, vehicle, {
      excludeExtraneousValues: true,
    });
  }

  public async createVehicle(
    vehicleBody: VehicleRequestDTO,
  ): Promise<VehicleIdDTO> {
    await this.clientService.getClientById(vehicleBody.client.id);

    let vehicle = plainToInstance(Vehicle, vehicleBody);
    vehicle = await this.vehicleRepository.save(vehicle);
    return { id: vehicle.id };
  }

  public async getVehicleByClientIdAndPlate(clientId: number, plate: string) {
    const vehicle = await this.vehicleRepository.findVehicleByClientIdAndPlate(
      clientId,
      plate,
    );

    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }

    return VehicleMapper.toDTO(vehicle);
  }
}
