import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()//
export class Comment {
    @Prop({required: true})
    comment: string;
  
    @Prop({required: true})
    postId : string;
    
    @Prop({required: true})
    devId : string;
    
    @Prop({default : Date.now})
    createdAt: Date;
  
    @Prop({default : Date.now})
    updatedAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);