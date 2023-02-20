import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create.experience.dto';


import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { UpdateExperienceDto } from './dto/update.experience.dto';



@Controller('developer')
export class ExperienceController {

    constructor(private readonly experienceService : ExperienceService) {}

    @Post()
    create(@Body() createExperienceDto: CreateExperienceDto){
        return this.experienceService.create(createExperienceDto);
    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateExperienceDto: UpdateExperienceDto) {
        return this.experienceService.update(+id, updateExperienceDto);
    }



}