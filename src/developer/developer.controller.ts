
import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Logger, Param, Patch, Post, Res, ValidationPipe } from "@nestjs/common";
import { CreateDeveloperDto } from "./dto/create.developer.dto";
import { DeveloperService } from "./developer.service";
import { LoginDeveloperDto } from "./dto/login.developer.dto";

import { DeveloperDto } from './dto/developer.dto';

@Controller('developer')
export class DeveloperController {
    logger:Logger;
    constructor(private readonly developerService : DeveloperService) {
        this.logger = new Logger();
    }

    @Post('/signup')
    async signup(@Body(new ValidationPipe()) createDeveloperDto: CreateDeveloperDto): Promise<CreateDeveloperDto> {
        this.logger.log("i'm in signup");
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