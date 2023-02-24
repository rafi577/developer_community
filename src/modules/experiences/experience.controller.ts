import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create.experience.dto';


import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { UpdateExperienceDto } from './dto/update.experience.dto';



@Controller('experience')
export class ExperienceController {

    constructor(private readonly experienceService : ExperienceService) {}

    @Post(':id')
    async create(@Body() createExperienceDto: CreateExperienceDto,@Param('id') id : string):Promise<CreateExperienceDto>{
        return this.experienceService.create(createExperienceDto,id);
    }
    
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateExperienceDto: UpdateExperienceDto):Promise<UpdateExperienceDto> {
        return await this.experienceService.update(+id, updateExperienceDto);
    }



}