import { GetSkillDto } from './dto/get.skill.dto';
import { Controller, Body, Post, Param, Get, ValidationPipe, Patch, Logger} from '@nestjs/common'
import { CreateSkillDto } from './dto/create.skill.dto';
import { SkillService } from './skill.service';
import { UpdateSkillDto } from './dto/update.skill.dto';

@Controller('skill')
export class SkillController {
    constructor(private readonly skillService: SkillService){}

    @Post(':id')
    async create(@Body(new ValidationPipe()) createSkillDto:CreateSkillDto,@Param('id') id : string):Promise<CreateSkillDto>{
        return await this.skillService.create(createSkillDto,id);
    }
    @Get(':id')
    async getSkill(@Param('id') id:string):Promise<GetSkillDto[]>{
        return await this.skillService.getSkill(id);
    }
    @Patch(':id')
    async updateSkill(@Body() updateSkillDto:UpdateSkillDto,@Param('id') id : string):Promise<UpdateSkillDto>{
        console.log(updateSkillDto);
        return this.skillService.updateSkill(updateSkillDto,id);
    }
}