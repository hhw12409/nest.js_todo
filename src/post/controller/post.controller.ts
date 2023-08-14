import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from '../service/post.service';
import { Post as PostType } from '@prisma/client';

@Controller('api/post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAllPost(): Promise<PostType[]> {
    return this.postService.getAllPost();
  }

  @Get('/:id')
  async getPostById(@Param('id') id: number): Promise<PostType> {
    return this.postService.getPostById(id);
  }

  @Post()
  async postPost(@Body() data: PostType): Promise<PostType> {
    return this.postService.postPost(data);
  }
}
