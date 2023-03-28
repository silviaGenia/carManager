import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//import * as AutoIncrementFactory from 

@Entity({ name: 'cars' })
export class Car {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  model: string;

  @Column({ default: '' })
  color: string;

  @Column({ default: '' })
  description: string;
}
