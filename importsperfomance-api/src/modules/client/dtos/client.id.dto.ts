import { Expose } from 'class-transformer';

export class ClientIdDTO {
  @Expose()
  id: number;
}
