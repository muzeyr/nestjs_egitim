import { UziBaseEntity } from 'src/entities/uzi.base.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
@Entity()
export class Product extends UziBaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.products)
  user: User;

  @Column()
  userId: string;
}
