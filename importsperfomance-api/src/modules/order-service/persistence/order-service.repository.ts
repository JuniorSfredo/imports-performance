import { DefaultRepository } from '../../../common/database/repository/default.repository';
import { OrderService } from '../entities/order-service.entity';
import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { PaginationDTO } from '../dtos/pagination.dto';
import { OrderServicePaginatedResultDTO } from '../dtos/order-service-paginated-result.dto';

@Injectable()
export class OrderServiceRepository extends DefaultRepository<OrderService> {
  constructor(manager: EntityManager) {
    super(OrderService, manager);
  }

  async findAllOrdersServiceByClientId(
    clientId: number,
    pagination: PaginationDTO,
  ): Promise<OrderServicePaginatedResultDTO> {
    const { page, limit } = pagination;
    const offset = (page - 1) * limit;

    const [data, total] = await this.manager
      .createQueryBuilder(OrderService, 'order')
      .innerJoin('tb_vehicle', 'vehicle', 'vehicle.id = order.vehicle_id')
      .where('vehicle.client_id = :clientId', { clientId })
      .skip(offset)
      .take(limit)
      .getManyAndCount();

    return {
      ordersService: data,
      totalPages: Math.ceil(total / limit),
      page,
    };
  }
}
