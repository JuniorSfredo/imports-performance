import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_auto_part')
export class AutoPart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ name: 'replacement_km' })
  replacementKm: number;
}
