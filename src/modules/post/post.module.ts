import { PostController } from './post.controller';
import { Module } from "@nestjs/common";
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/Model/post.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [PostController],
    providers: [PostService],
})
export class postModule {}


