import { AuthGuard } from '@nestjs/passport';
import { GetSkillDto } from './dto/get.skill.dto';
import { Controller, Body, Post, Param, Get, ValidationPipe, Patch, Logger, UseGuards,Headers, ConflictException} from '@nestjs/common'
import { CreateSkillDto } from './dto/create.skill.dto';
import { SkillService } from './skill.service';
import { UpdateSkillDto } from './dto/update.skill.dto';

@Controller('skill')
@UseGuards(AuthGuard('jwt'))
export class SkillController {
    constructor(private readonly skillService: SkillService){}

    @Post()
    async create(@Body() createSkillDto:CreateSkillDto,@Headers('authorization') bearerToken: string ):Promise<CreateSkillDto>{
        try{
            const token = bearerToken.split(' ')[1];
            const userId:string = await this.skillService.getUserIdFromAccessToken(token);
            return this.skillService.create(createSkillDto,userId);
        }
        catch(err){
            throw new  ConflictException('User already exists', 
            { 
                cause: new Error(), 
                description: 'chose a different email' 
            })
        }
    }
    //get all skill for a specific developer
    @Get(':id')
    async getSkill(@Param('id') id:string):Promise<GetSkillDto[]>{
        return await this.skillService.getSkill(id);
    }

    //update with skill id
    @Patch(':id')
    async updateSkill(@Body() updateSkillDto:UpdateSkillDto,@Param('id') id : string):Promise<UpdateSkillDto>{
        console.log(updateSkillDto);
        return this.skillService.updateSkill(updateSkillDto,id);
    }
}