import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
import { Body, Controller, Patch, Post,Headers } from "@nestjs/common";


@Controller('comment')
export class CommentController {

    constructor(private readonly commentService : CommentService) {}

    @Post()
    async create(@Body() createCommentDto: CreateCommentDto, @Headers('authorization') baererToken:string):Promise<CreateCommentDto> {
        const token = baererToken.split(' ')[1];
        const id = await this.commentService.getUserIdFromAccessToken(token);
        return this.commentService.create(createCommentDto,id);
    }

}