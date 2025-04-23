import { IsString, IsEmail } from 'class-validator';
export class singinDTO {
    @IsString()
    password: string;
    @IsEmail()
    email: string;
}
