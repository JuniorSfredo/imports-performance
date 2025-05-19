import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from '../../../common/enums/status.enum';
import { OrderService } from '../../order-service/entities/order-service.entity';

@Entity('tb_payment')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column('timestamp', { name: 'payment_date' })
  paymentDate: Date;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;

  @OneToOne(() => OrderService, (orderService) => orderService.payment)
  orderService: OrderService;
}
