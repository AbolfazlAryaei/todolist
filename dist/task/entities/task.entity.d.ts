import { User } from "src/user/entities/user.entity";
export declare class Task {
    id: number;
    title: string;
    catagory: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
