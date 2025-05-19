import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehiclesResponseDTO } from './dtos/response/vehicles.response.dto';
import { VehicleRequestDTO } from './dtos/request/vehicle.request.dto';
import { VehicleIdDTO } from './dtos/response/vehicle.id.dto';
import { CustomValidationPipe } from '../../common/pipes/custom.validation.pipe';

@Controller('/vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  async getAllVehicles(): Promise<VehiclesResponseDTO[]> {
    return this.vehicleService.getAllVehicles();
  }

  @Get(':id')
  async getVehicle(@Param('id') id: number): Promise<VehiclesResponseDTO> {
    return await this.vehicleService.getVehicleById(id);
  }

  @Post('/create')
  @UsePipes(new CustomValidationPipe())
  async createVehicle(
    @Body() vehicleBody: VehicleRequestDTO,
  ): Promise<VehicleIdDTO> {
    return await this.vehicleService.createVehicle(vehicleBody);
  }

  @Get('/clients/:clientId')
  @UsePipes(new CustomValidationPipe())
  async getVehicleByClientIdAndPlate(
    @Param('clientId') clientId: number,
    @Query('plate') plate: string,
  ) {
    return await this.vehicleService.getVehicleByClientIdAndPlate(
      clientId,
      plate,
    );
  }
}
