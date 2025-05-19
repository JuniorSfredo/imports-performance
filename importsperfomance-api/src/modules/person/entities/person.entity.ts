import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Expose } from 'class-transformer';
import { Role } from '../../../common/enums/role.enums';

export abstract class Person {
  @Expose()
  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @Column()
  name: string;

  @Expose()
  @Column()
  email: string;

  @Expose()
  @Column()
  cpf: string;

  @Expose()
  @Column()
  address: string;

  @Expose()
  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Expose()
  @Column()
  password: string;

  @Column()
  role: Role;
}
