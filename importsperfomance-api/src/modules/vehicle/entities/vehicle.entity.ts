import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Client } from '../../client/entities/client.entity';
import { OrderService } from '../../order-service/entities/order-service.entity';

@Entity('tb_vehicle')
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column({ name: 'vehicle_type' })
  vehicleType: string;

  @Column({ name: 'vehicle_plate' })
  vehiclePlate: string;

  @Column()
  color: string;

  @Column()
  year: number;

  @Column()
  mileage: number;

  @ManyToOne(() => Client, (client) => client.vehicles)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @OneToMany(() => OrderService, (orderService) => orderService.vehicle)
  ordersService: OrderService[];
}
