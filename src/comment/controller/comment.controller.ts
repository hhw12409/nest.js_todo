import { Controller, Get } from '@nestjs/common';
import { CommentService } from '../service/comment.service';
import { Comment } from '@prisma/client';

@Controller('api/comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get()
  async getAllComment(): Promise<Comment[]> {
    return this.commentService.getAllComment();
  }
}
