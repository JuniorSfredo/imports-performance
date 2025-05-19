import { Entity, OneToMany } from 'typeorm';
import { Person } from '../../person/entities/person.entity';
import { Vehicle } from '../../vehicle/entities/vehicle.entity';

@Entity('tb_client')
export class Client extends Person {
  @OneToMany(() => Vehicle, (vehicle) => vehicle.client)
  vehicles: Vehicle[];
}
