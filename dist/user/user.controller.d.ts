import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { singinDTO } from './dto/singin.user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    singin(singdto: singinDTO): Promise<{
        access_token: string;
    }>;
    findAll(): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
