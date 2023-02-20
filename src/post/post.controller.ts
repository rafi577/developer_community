import { Controller, Body, Post} from '@nestjs/common'
import { CreatePostDto } from './dto/post.create.dto'

@Controller('post')
export class PostController {
    @Post()
    create(@Body() createPostDto:CreatePostDto){

    }
}