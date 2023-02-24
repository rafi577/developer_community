import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create.skill.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Skill, SkillDocument } from 'src/Model/skill.schema';
import { Model } from 'mongoose';
import { GetSkillDto } from './dto/get.skill.dto';
import { UpdateSkillDto } from './dto/update.skill.dto';



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
        // await this.skillModel.createIndexes();
        const skillData = await this.skillModel.create(data);
        return skillData.save();
    }

    async getSkill(id:string):Promise<GetSkillDto[]>{
        const data = await this.skillModel.find({id});
        if(data)return data;
    }

    async updateSkill(updateSkillDto:UpdateSkillDto,id:string):Promise<UpdateSkillDto>{
        const {level} = updateSkillDto;
        const data = {
            level
        }
        const  updateSkillData = await this.skillModel.updateOne({id},data);
        return data;
    }
}