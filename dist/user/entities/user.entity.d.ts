import { Task } from 'src/task/entities/task.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    tasks: Task[];
}
