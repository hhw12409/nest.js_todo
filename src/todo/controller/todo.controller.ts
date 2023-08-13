import { Controller, Delete, Get, Param } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';

@Controller('api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  @Get('/:id')
  async getTodoById(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.getTodoById(id);
  }

  @Delete('/:id')
  async deleteTodoById(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.deleteTodoById(id);
  }
}
