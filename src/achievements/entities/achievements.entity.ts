import { User } from "src/user/user.entities";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Achievements {
  @PrimaryGeneratedColumn()
  achi_id: number;

  @Column()
  ache_name: string;

  @Column()
  ache_decs: string;

  @Column()
  is_hidden: boolean;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'user_achi',
    joinColumn: {
      name: 'achi_id',
      referencedColumnName: 'achi_id'
    },
    inverseJoinColumn:{
      name: 'user_id',
      referencedColumnName: 'user_id'
    }
  })
  users: User[];
}