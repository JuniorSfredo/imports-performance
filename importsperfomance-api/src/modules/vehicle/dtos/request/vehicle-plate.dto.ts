import { IsNotEmpty, MinLength } from 'class-validator';

export class VehiclePlateDTO {
  @IsNotEmpty()
  @MinLength(3)
  plate: string;
}
