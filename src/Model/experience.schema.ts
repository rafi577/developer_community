import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { level } from 'src/modules/skills/dto/create.skill.dto';

export type ExperienceDocument = HydratedDocument< Experience>;

@Schema()//
export class  Experience {

    @Prop({required: true})
    title : string;

    @Prop({required: true})
    start_time : string;

    @Prop({required: true})
    end_time : string;

    @Prop({required: true})
    description : string;

    @Prop({required: true})
    devId : string;
        
    @Prop({default : Date.now})
    createdAt: Date;
    
    @Prop({default : Date.now})
    updatedAt: Date;
}



export const  ExperienceSchema = SchemaFactory.createForClass( Experience);
// SkillSchema.index({ 'skills.name': 1 }, { unique: true }); // Create unique index for skills.name field