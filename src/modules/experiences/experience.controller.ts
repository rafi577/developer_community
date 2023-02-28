import { AuthGuard } from '@nestjs/passport';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create.experience.dto';


import { Body, Controller, Get, Param, Patch, Post,Headers, UseGuards } from "@nestjs/common";
import { UpdateExperienceDto } from './dto/update.experience.dto';



@Controller('experience')
@UseGuards(AuthGuard('jwt'))
export class ExperienceController {

    constructor(private readonly experienceService : ExperienceService) {}

    @Post()
    async create(@Body() createExperienceDto: CreateExperienceDto,@Headers('authorization') bearerToken:string):Promise<CreateExperienceDto>{
        const token = bearerToken.split(' ')[1];
        const id = await this.experienceService.getUserIdFromAccessToken(token);
        return this.experienceService.create(createExperienceDto,id);
    }


    //update with experience id
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateExperienceDto: UpdateExperienceDto):Promise<UpdateExperienceDto> {
        return await this.experienceService.update(+id, updateExperienceDto);
    }



}