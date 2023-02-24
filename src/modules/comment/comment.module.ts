import { CommentService } from './comment.service';
import { Module } from "@nestjs/common";
import { CommentController } from "./comment.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema,Comment } from 'src/Model/comment.schema';




@Module({
    imports: [MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }])],
    controllers: [CommentController],
    providers: [CommentService]
})
export class CommentModule{}