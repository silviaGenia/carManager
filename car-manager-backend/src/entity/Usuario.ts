import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ default: '' })
  nombre: string;

  @Column({ default: '' })
  primer_apellido: string;

  @Column({ default: '' })
  segundo_apellido: string;

  @Column()
  edad: number;

  @Column({ default: '' })
  documento_identidad: string;
}
