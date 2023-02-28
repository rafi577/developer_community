import { AuthGuard } from '@nestjs/passport';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
import { Body, Controller, Patch, Post,Headers, Param, UseGuards } from "@nestjs/common";


@Controller('comment')
@UseGuards(AuthGuard('jwt'))
export class CommentController {

    constructor(private readonly commentService : CommentService) {}

    @Post(':id')
    async create(@Body() createCommentDto: CreateCommentDto, @Headers('authorization') baererToken:string,@Param('id')postId:string):Promise<CreateCommentDto> {
        const token = baererToken.split(' ')[1];
        const devId = await this.commentService.getUserIdFromAccessToken(token);
        
        return this.commentService.create(createCommentDto,devId,postId);
        return createCommentDto;
    }

}