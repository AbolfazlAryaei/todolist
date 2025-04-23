import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';
export class CreateTaskDto {
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  title: string;

  @MinLength(2)
  @MaxLength(10)
  @IsString()
  catagory: string;

  @MinLength(2)
  @MaxLength(70)
  @IsString()
  description: string;

  @IsString()
  completed: boolean;
}
