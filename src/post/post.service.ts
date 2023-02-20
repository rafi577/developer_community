import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/post.create.dto';



@Injectable()
export class PostService {
    create(createPostDto : CreatePostDto){
        return 'this is the create post';
    }
    get(){
        return 'this is the get post';
    }
}