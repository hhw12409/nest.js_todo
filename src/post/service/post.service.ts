import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  // 전체조회 쿼리빌더
  async getAllPost(): Promise<Post[]> {
    return this.prismaService.post.findMany();
  }

  // 단일조회 쿼리빌더
  async getPostById(id: number): Promise<Post> {
    return this.prismaService.post.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  // Post생성 쿼리빌더
  async postPost(data: Post): Promise<Post> {
    return this.prismaService.post.create({ data });
  }
}
