import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class UserFriend {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  friend_id: number;

  @Column({ type: 'bit varying', default: '01', nullable: false, width: 2, comment: '00:친구, 01: 요청, 10:거절, 11:차단' })
  status: string;

  @CreateDateColumn()
  reg_at: Date;
}