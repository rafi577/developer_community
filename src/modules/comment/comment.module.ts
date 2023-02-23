import { CommentService } from './comment.service';
import { Module } from "@nestjs/common";
import { CommentController } from "./comment.controller";




@Module({
    // imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [CommentController],
    providers: [CommentService]
})
export class CommentModule{}