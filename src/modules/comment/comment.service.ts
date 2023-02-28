import { CommentDocument,Comment } from './../../Model/comment.schema';

import { Injectable } from "@nestjs/common";
import { CreateCommentDto } from "./dto/create.comment.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class CommentService{
    constructor(@InjectModel(Comment.name)private readonly commentModel:Model<CommentDocument>){}


    async getUserIdFromAccessToken(accessToken:string):Promise<string>{
        const decodeToken:any = jwt.verify(accessToken,'secret');
        return decodeToken.id;
    }

    async create(createCommentDto: CreateCommentDto,devId:string,postId:string):Promise<CreateCommentDto> {
        const {comment} = createCommentDto;

        const data ={
            comment,
            devId,
            postId
        }
        const commentData = this.commentModel.create(data);
        return commentData;
    }
    //return all the developers
    findAll() {
        return `This action returns all dev`;
    }
    
    findOne(id: number) {
        return `This action returns a #${id} dev`;
    }
}