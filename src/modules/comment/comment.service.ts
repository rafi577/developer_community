
import { Injectable } from "@nestjs/common";
import { CreateCommentDto } from "./dto/create.comment.dto";



@Injectable()
export class CommentService{
    create(createCommentDto: CreateCommentDto) {
        return 'this is for create new developer';
    }
    //return all the developers
    findAll() {
        return `This action returns all dev`;
    }
    
    findOne(id: number) {
        return `This action returns a #${id} dev`;
    }
}