import { Post, PostDocument } from './../../Model/post.schema';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/post.create.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetPostDto } from './dto/post.get.dto';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class PostService {

    constructor(@InjectModel(Post.name) private createPostModel: Model<PostDocument>){}


    async getUserIdFromAccessToken(accessToken: string): Promise<string> {
        const decodedToken: any = jwt.verify(accessToken, 'secret');
    
        const userId: string = decodedToken.id;
        // console.log(userId);
    
        return userId;
      }


    async create(createPostDto : CreatePostDto, id:string): Promise<CreatePostDto> {
        const {title , description} = createPostDto;

        const data = {
            title,
            description,
            devId : id
        }
        const postData = await this.createPostModel.create(data);
        return postData.save();
    }
    async getAllPost(id:string):Promise<GetPostDto[]>{
        const post =await this.createPostModel.find({id});
        if(post){
            return post;
        }
    }

    // async verifyToken(token: string): Promise<any> {
    //     try {
    //         const decoded = jwt.verify(token, 'jwtConstants.secret');
    //         return decoded;
    //     } catch (err) {
    //         throw new Error('Invalid token');
    //     }
    //   }
    
}