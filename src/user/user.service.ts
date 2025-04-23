import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
    private jwt: JwtService,
  ) {}
  async create(createUser: CreateUserDto) {
    const { username, password, email } = createUser;
    const users = await this.repo.findOne({ where: { email } });
    if (users) {
      throw new UnauthorizedException('User already logged in');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.repo.create({
      username,
      password: hashedPassword,
      email,
    });
    return this.repo.save(user);
  }
  async login(email: string, password: string) {
    const user = await this.repo.findOne({ where: { email } });
console.log(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { email: user.email, sub: user.id };
    const token = this.jwt.sign(payload);

    return { access_token: token };
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(email: string) {
    this.repo.find({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
