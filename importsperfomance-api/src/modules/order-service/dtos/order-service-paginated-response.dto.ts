import { OrdersServiceResponseDTO } from './orders-service.response.dto';
import { PaginationResponseDTO } from './pagination-response.dto';

export class OrderServicePaginatedResponseDTO {
  pagination: PaginationResponseDTO;
  ordersService: OrdersServiceResponseDTO[];
}
