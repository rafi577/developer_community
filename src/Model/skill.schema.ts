import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { level } from 'src/modules/skills/dto/create.skill.dto';

export type SkillDocument = HydratedDocument<Skill>;

@Schema()//
export class Skill {

    @Prop({required: true,unique: true})
    name : string;

    @Prop({required: true})
    level: level;

    @Prop({required: true})
    devId : string;
        
    @Prop({default : Date.now})
    createdAt: Date;
    
    @Prop({default : Date.now})
    updatedAt: Date;
}



export const SkillSchema = SchemaFactory.createForClass(Skill);
// SkillSchema.index({ 'skills.name': 1 }, { unique: true }); // Create unique index for skills.name field