import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()//
export class Post {

    @Prop({required : true})
    devId:string;

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    description : string;

    @Prop()
    skills_id: string;

    @Prop()
    experience_id: string;

    
    @Prop({default : Date.now})
    createdAt: Date;
  
    @Prop({default : Date.now})
    updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);