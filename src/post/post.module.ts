import { PostController } from './post.controller';
import { Module } from "@nestjs/common";
import { PostService } from './post.service';


@Module({
    // imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [PostController],
    providers: [PostService],
})
export class postModule {}


