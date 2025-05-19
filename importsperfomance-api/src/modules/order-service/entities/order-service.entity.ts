import {
  Column,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinTable,
  Entity,
  JoinColumn,
} from 'typeorm';
import { OrderServiceStatus } from '../enums/order-service-status.enum';
import { AutoPart } from '../../auto-part/entities/auto-part.entity';
import { Vehicle } from '../../vehicle/entities/vehicle.entity';
import { Payment } from '../../payment/entities/payment.entity';
import { Employee } from '../../employee/entities/employee.entity';

@Entity('tb_order_service')
export class OrderService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'service_description' })
  serviceDescription: string;

  @Column({
    type: 'enum',
    enum: OrderServiceStatus,
    default: OrderServiceStatus.WAITING,
  })
  status: OrderServiceStatus;

  @Column('decimal', { name: 'labor_cost', precision: 10, scale: 2 })
  laborCost: number;

  @Column('decimal', { name: 'parts_cost', precision: 10, scale: 2 })
  partsCost: number;

  @Column('decimal', { name: 'final_cost', precision: 10, scale: 2 })
  finalCost: number;

  @Column('datetime', { name: 'generated_at' })
  generatedAt: Date;

  @ManyToMany(() => AutoPart)
  @JoinTable({
    name: 'tb_order_service_has_auto_part',
    joinColumn: {
      name: 'order_service_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName:
        'fk_order_service_has_auto_part_order_service_id',
    },
    inverseJoinColumn: {
      name: 'auto_part_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'fk_order_service_has_auto_part_auto_part_id',
    },
  })
  usedParts: AutoPart[];

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.ordersService)
  @JoinColumn({ name: 'vehicle_id' })
  vehicle: Vehicle;

  @OneToOne(() => Payment, (payment) => payment.orderService)
  @JoinColumn({ name: 'payment_id' })
  payment: Payment;

  @ManyToOne(() => Employee, (employee) => employee.orderServices)
  @JoinColumn({ name: 'mechanical_id' })
  mechanical: Employee;
}
