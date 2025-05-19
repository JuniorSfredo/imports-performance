import { Expose, Type } from 'class-transformer';
import { ClientSummaryDTO } from '../../../client/dtos/client.summary.dto';
import { IsRequired } from '../../../../common/decorators/is.required.decorator';
import { Max, Min } from 'class-validator';
import { Length } from '@nestjs/class-validator';
import { ClientIdDTO } from '../../../client/dtos/client.id.dto';

export class VehicleRequestDTO {
  @Expose()
  @IsRequired()
  make: string;

  @Expose()
  @IsRequired()
  vehicleType: string;

  @Expose()
  @IsRequired()
  vehiclePlate: string;

  @Expose()
  @IsRequired()
  @Length(2)
  color: string;

  @Expose()
  @Min(10)
  @Max(new Date().getFullYear() + 1)
  year: number;

  @Expose()
  @Min(0)
  mileage: number;

  @Expose()
  @Type(() => ClientIdDTO)
  client: ClientIdDTO;
}
