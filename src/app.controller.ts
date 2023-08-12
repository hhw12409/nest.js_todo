import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(): string {
    return 'postHello';
  }

  @Put()
  putHello(): string {
    return 'put';
  }

  @Delete()
  deleteHello(): string {
    return 'delete';
  }

  @Patch()
  patchHello(): string {
    return 'patch';
  }
}
