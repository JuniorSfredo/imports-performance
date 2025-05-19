import { Injectable } from '@nestjs/common';
import { OrderServiceRepository } from './persistence/order-service.repository';
import { PaginationDTO } from './dtos/pagination.dto';
import { OrderServiceMapper } from './mapper/OrderServiceMapper';
import { OrderServicePaginatedResponseDTO } from './dtos/order-service-paginated-response.dto';

@Injectable()
export class OrderServiceService {
  constructor(
    private readonly orderServiceRepository: OrderServiceRepository,
  ) {}

  public async getAllOrdersByClientId(
    clientId: number,
    pagination: PaginationDTO,
  ): Promise<OrderServicePaginatedResponseDTO> {
    const response =
      await this.orderServiceRepository.findAllOrdersServiceByClientId(
        clientId,
        pagination,
      );

    return OrderServiceMapper.toOrderServicePaginatedDTO(response);
  }
}
