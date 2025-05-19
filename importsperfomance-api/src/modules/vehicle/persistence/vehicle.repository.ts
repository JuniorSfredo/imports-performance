import { DefaultRepository } from '../../../common/database/repository/default.repository';
import { Vehicle } from '../entities/vehicle.entity';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VehicleRepository extends DefaultRepository<Vehicle> {
  constructor(manager: EntityManager) {
    super(Vehicle, manager);
  }

  async findAll(): Promise<Vehicle[]> {
    return await this.manager.find(Vehicle);
  }

  async findById(id: number): Promise<Vehicle> {
    const vehicle = await this.manager.findOne(Vehicle, {
      where: { id: id },
      relations: ['client'],
    });

    if (!vehicle) throw new Error('Vehicle not found');
    return vehicle;
  }

  public async save(vehicle: Vehicle): Promise<Vehicle> {
    this.manager.create(Vehicle, vehicle);
    return await this.manager.save(vehicle);
  }

  public async findVehicleByClientIdAndPlate(
    clientId: number,
    plate: string,
  ): Promise<Vehicle | null> {
    return await this.manager.findOne(Vehicle, {
      where: {
        client: { id: clientId },
        vehiclePlate: plate,
      },
      relations: ['client'],
    });
  }
}
