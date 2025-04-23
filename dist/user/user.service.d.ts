import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private repo;
    private jwt;
    constructor(repo: Repository<User>, jwt: JwtService);
    create(createUser: CreateUserDto): Promise<User>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
    findAll(): string;
    findOne(email: string): void;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
