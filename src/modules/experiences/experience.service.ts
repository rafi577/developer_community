import { UpdateExperienceDto } from './dto/update.experience.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from "@nestjs/common";
import { CreateExperienceDto } from "./dto/create.experience.dto";
import { Experience, ExperienceDocument } from 'src/Model/experience.schema';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class ExperienceService {

    constructor(@InjectModel(Experience.name) private readonly experienceModel:Model<ExperienceDocument>){}

    async getUserIdFromAccessToken(accessToken: string): Promise<string> {
        const decodedToken: any = jwt.verify(accessToken, 'secret');
    
        const userId: string = decodedToken.id;
        // console.log(userId);
    
        return userId;
    }

    async create(createExperienceDto : CreateExperienceDto,id:string):Promise<CreateExperienceDto> {
        const {title,start_time,end_time, description} = createExperienceDto;
        const data = {
            title,
            start_time,
            end_time,
            description,
            devId : id
        }
        const experienceData = this.experienceModel.create(data);
        return createExperienceDto;
    }

    async update(id:number,updateExperienceDto : UpdateExperienceDto):Promise<UpdateExperienceDto> {
        const {title,start_time,end_time, description} = updateExperienceDto;
        const data = {
            title,
            start_time,
            end_time,
            description
        }
        const experienceData = await this.experienceModel.updateOne({id},data);
        return data;
    }
}