import { Controller, Body, Post, Param, Get, Req,Headers, UseGuards} from '@nestjs/common'
import { CreatePostDto } from './dto/post.create.dto'
import { PostService } from './post.service';
import { GetPostDto } from './dto/post.get.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('post')
@UseGuards(AuthGuard())
export class PostController {

    constructor(private readonly postService : PostService) {}

    @Post()
    async create(@Body() createPostDto:CreatePostDto,@Headers('authorization') bearerToken: string): Promise<CreatePostDto> {
        const token = bearerToken.split(' ')[1];
        const userId:string = await this.postService.getUserIdFromAccessToken(token);
        return await this.postService.create(createPostDto,userId);
    }

//    @Get(':id')
//    async getPost(@Param('id') id: string, @Req() req,@Headers('authorization') authorization: string):Promise<GetPostDto[]>{
//     const userId = await this.createPost.getUserIdFromAccessToken(authorization);
//     // const userId = await this.createPost.getUserIdFromAccessToken(req.headers.authorization[1]);

//     console.log(userId);
//        return this.createPost.getPost(id);
//    }
    @Get(':id')
    async getAllPostBySpesificUser(@Param('id') id : string):Promise<GetPostDto[]>{
        return this.postService.getAllPost(id);
    }
}