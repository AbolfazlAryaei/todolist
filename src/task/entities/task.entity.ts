import { Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,ManyToOne } from "typeorm";
import { User } from "src/user/entities/user.entity";
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  catagory: string;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
