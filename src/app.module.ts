import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UserModule, PostModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
