import { ItemShop } from 'src/item-shop/entities/item-shop.entity';
import { User } from 'src/user/user.entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Room {
  @PrimaryColumn()
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  user_id: number;

  @PrimaryColumn()
  @ManyToOne(() => ItemShop)
  @JoinColumn({ name: 'item_id', referencedColumnName: 'item_id' })
  item_id: number;
}
