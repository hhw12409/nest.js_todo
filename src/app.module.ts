import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { CommentController } from './comment/controller/comment.controller';
import { CommentService } from './comment/service/comment.service';

@Module({
  imports: [TodoModule, UserModule, PostModule, CommentModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class AppModule {}
