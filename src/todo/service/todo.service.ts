import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  // 전체조회 쿼리빌더
  async getAllTodos(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }

  // 단일조회 쿼리빌더
  async getTodoById(id: number): Promise<Todo> {
    return this.prismaService.todo.findUnique({
      where: {
        id: Number(id),
      },
    });
  }
}
