import { Injectable } from "@nestjs/common";
import { CreateExperienceDto } from "./dto/create.experience.dto";



@Injectable()
export class ExperienceService {
    create(createExperieanceDto : CreateExperienceDto){
        return 'this is to add experience';
    }

    update(id:number,experienceDto : CreateExperienceDto){
        return `This action updates a #${id} experience`;
    }
}