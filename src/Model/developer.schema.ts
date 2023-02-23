import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeveloperDocument = HydratedDocument<Developer>;

@Schema()//
export class Developer {
  @Prop({required: true})
  phone: string;

  @Prop({required: true,unique: true})
  username : string;

  @Prop({required: true})
  password: string;
    
  @Prop({default : Date.now})
  createdAt: Date;
  
  @Prop({default : Date.now})
  updatedAt: Date;
}

export const DeveloperSchema = SchemaFactory.createForClass(Developer);