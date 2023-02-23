import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";


@Controller('comment')
export class CommentController {

    constructor(private readonly developerService : CommentService) {}

    @Post()
    create(@Body() createCommentDto: CreateCommentDto){
        return this.developerService.create(createCommentDto);
    }

}