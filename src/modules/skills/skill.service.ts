import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create.skill.dto';



@Injectable()
export class SkillService {
    create(createSkillDto : CreateSkillDto){
        return 'this is the create post';
    }
}