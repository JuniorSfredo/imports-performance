import { OrderServicePaginatedResultDTO } from '../dtos/order-service-paginated-result.dto';
import { plainToInstance } from 'class-transformer';
import { OrdersServiceResponseDTO } from '../dtos/orders-service.response.dto';
import { PaginationResponseDTO } from '../dtos/pagination-response.dto';
import { OrderServicePaginatedResponseDTO } from '../dtos/order-service-paginated-response.dto';

export class OrderServiceMapper {
  public static toOrderServicePaginatedDTO(
    unmappedOrderService: OrderServicePaginatedResultDTO,
  ): OrderServicePaginatedResponseDTO {
    const { ordersService, totalPages, page } = unmappedOrderService;

    const mappedOrdersService = ordersService.map((orders) =>
      plainToInstance(OrdersServiceResponseDTO, orders, {
        excludeExtraneousValues: true,
      }),
    );

    const pagination: PaginationResponseDTO = {
      page,
      totalPages,
    };

    return {
      ordersService: mappedOrdersService,
      pagination: pagination,
    };
  }
}
