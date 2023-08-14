import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  // 전체조회 쿼리빌더
  async getAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  // 단일조회 쿼리빌더
  async getUserById(id: number): Promise<User> {
    return this.prismaService.user.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  // 계정 생성
  async postUser(data: User): Promise<User> {
    return this.prismaService.user.create({ data });
  }
}
