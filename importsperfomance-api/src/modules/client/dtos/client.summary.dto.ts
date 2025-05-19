import { Expose } from 'class-transformer';

export class ClientSummaryDTO {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
