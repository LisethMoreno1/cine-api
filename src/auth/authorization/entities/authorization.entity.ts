import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authorizations')
export class Authorization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  roleName: string;

  @Column({ type: 'varchar', length: 100 })
  permission: string;

  @Column({ type: 'boolean', default: true })
  available: boolean;
}
