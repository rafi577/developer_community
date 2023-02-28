import { PostController } from './post.controller';
import { Module } from "@nestjs/common";
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/Model/post.schema';
import { developerModule } from 'src/developer/developer.module';


@Module({
    imports: [developerModule,
        MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [PostController],
    providers: [PostService],
})
export class postModule {}


