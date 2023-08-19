import { Injectable } from '@nestjs/common';
import { Comment } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prismaService: PrismaService) {}

  // 전체 조회 쿼리 빌더
  async getAllComment(): Promise<Comment[]> {
    return this.prismaService.comment.findMany();
  }
}
