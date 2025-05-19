import { Person } from '../../person/entities/person.entity';
import { Entity, OneToMany } from 'typeorm';
import { OrderService } from '../../order-service/entities/order-service.entity';

@Entity('tb_employee')
export class Employee extends Person {
  @OneToMany(() => OrderService, (orderService) => orderService.mechanical)
  orderServices: OrderService[];
}
