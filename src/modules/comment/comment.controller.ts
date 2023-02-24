import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";


@Controller('comment')
export class CommentController {

    constructor(private readonly developerService : CommentService) {}

    @Post(':id')
    async create(@Body() createCommentDto: CreateCommentDto, @Param('id') id:string):Promise<CreateCommentDto> {
        return this.developerService.create(createCommentDto,id);
    }

}