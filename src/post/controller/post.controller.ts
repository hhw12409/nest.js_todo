import { Controller, Get } from '@nestjs/common';
import { PostService } from '../service/post.service';
import { Post } from '@prisma/client';

@Controller('api/post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAllPost(): Promise<Post[]> {
    return this.postService.getAllPost();
  }
}