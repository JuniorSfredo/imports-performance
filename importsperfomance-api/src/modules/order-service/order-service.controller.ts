import { Controller, Get, Param, Query, UsePipes } from '@nestjs/common';
import { OrderServiceService } from './order-service.service';
import { PaginationDTO } from './dtos/pagination.dto';
import { CustomValidationPipe } from '../../common/pipes/custom.validation.pipe';

@Controller('/orders-service')
export class OrderServiceController {
  constructor(private readonly orderServiceService: OrderServiceService) {}

  @Get('/clients/:clientId')
  @UsePipes(new CustomValidationPipe())
  public async getAllOrders(
    @Param('clientId') clientId: number,
    @Query() pagination: PaginationDTO,
  ) {
    return await this.orderServiceService.getAllOrdersByClientId(
      clientId,
      pagination,
    );
  }
}
