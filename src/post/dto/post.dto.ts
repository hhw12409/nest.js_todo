import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';
import { User } from '@prisma/client';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  author: User;

  @IsNotEmpty()
  @IsNumber()
  authorId: number;

  @IsNotEmpty()
  @IsBoolean()
  published: boolean;

  @IsNotEmpty()
  categories;
}
