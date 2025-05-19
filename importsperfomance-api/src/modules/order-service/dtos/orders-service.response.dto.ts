import { Expose } from 'class-transformer';

export class OrdersServiceResponseDTO {
  @Expose()
  id: number;

  @Expose()
  generatedAt: Date;

  @Expose()
  serviceDescription: string;

  @Expose()
  finalCost: number;
}
