import { Controller, Body, Post} from '@nestjs/common'
import { CreateSkillDto } from './dto/create.skill.dto';

@Controller('skill')
export class SkillController {
    @Post()
    create(@Body() createSkillDto:CreateSkillDto){

    }
}