import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create.skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Skill, SkillDocument } from 'src/Model/skill.schema';
import { Model } from 'mongoose';
import { GetSkillDto } from './dto/get.skill.dto';



@Injectable()
export class SkillService {

    constructor(@InjectModel(Skill.name) private skillModel: Model<SkillDocument>){}

    async create(createSkillDto : CreateSkillDto,id:string): Promise<CreateSkillDto> {
        const {name,level} = createSkillDto;
        const data = {
            name,
            level,
            devId:id
        }
        const skillData = await this.skillModel.create(data);
        return skillData.save();
    }

    async getSkill(id:string):Promise<GetSkillDto[]>{
        const data = await this.skillModel.find({id});
        if(data)return data;
    }
}