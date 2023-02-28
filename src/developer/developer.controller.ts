
import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Res, ValidationPipe } from "@nestjs/common";
import { CreateDeveloperDto } from "./dto/create.developer.dto";
import { DeveloperService } from "./developer.service";
import { LoginDeveloperDto } from "./dto/login.developer.dto";

import { DeveloperDto } from './dto/developer.dto';

@Controller('developer')
export class DeveloperController {

    constructor(private readonly developerService : DeveloperService) {}

    @Post('/signup')
    async signup(@Body(new ValidationPipe()) createDeveloperDto: CreateDeveloperDto): Promise<CreateDeveloperDto> {
        try{
            return await this.developerService.signup(createDeveloperDto);
           // return users.map((user) => user.toDto());
        }
        catch(err){
            throw new HttpException('user already exist', HttpStatus.NOT_FOUND);
        }
    }

    @Post('login')
    async login(@Body() loginDeveloperDto: LoginDeveloperDto):Promise<any>{
        return this.developerService.login(loginDeveloperDto);
    }
}