import { Controller, Body, Post, Param, Get} from '@nestjs/common'
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
   async getPost(@Param('id') id: string):Promise<GetPostDto[]>{
       return this.createPost.getPost(id);
   }
}