import { OrderService } from '../entities/order-service.entity';

export class OrderServicePaginatedResultDTO {
  page: number;
  totalPages: number;
  ordersService: OrderService[];
}
