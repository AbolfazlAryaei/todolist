import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
export declare class TaskService {
    private repo;
    constructor(repo: Repository<Task>);
    create(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTaskDto: UpdateTaskDto): string;
    remove(id: number): string;
}
