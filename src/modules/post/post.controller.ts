import { Controller, Body, Post, Param, Get, Req,Headers} from '@nestjs/common'
import { CreatePostDto } from './dto/post.create.dto'
import { PostService } from './post.service';
import { GetPostDto } from './dto/post.get.dto';

@Controller('post')
export class PostController {

    constructor(private readonly createPost : PostService) {}

    @Post(':id')
    async create(@Body() createPostDto:CreatePostDto, @Param('id') id: string): Promise<CreatePostDto> {
        return await this.createPost.create(createPostDto,id);
    }

   @Get(':id')
   async getPost(@Param('id') id: string, @Req() req,@Headers('authorization') authorization: string):Promise<GetPostDto[]>{
    const userId = await this.createPost.getUserIdFromAccessToken(authorization);
    // const userId = await this.createPost.getUserIdFromAccessToken(req.headers.authorization[1]);

    console.log(userId);
       return this.createPost.getPost(id);
   }
}