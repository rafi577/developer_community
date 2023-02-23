import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Res, ValidationPipe } from "@nestjs/common";
import { CreateDeveloperDto } from "./dto/create.developer.dto";
import { DeveloperService } from "./developer.service";
import { LoginDeveloperDto } from "./dto/login.developer.dto";
import { create } from "domain";
import { Response } from 'express';

@Controller('developer')
export class DeveloperController {

    constructor(private readonly developerService : DeveloperService) {}

    @Post('/signup')
    async signup(@Body(new ValidationPipe()) createDeveloperDto: CreateDeveloperDto,@Res() res): Promise<CreateDeveloperDto> {
        try{
            return await this.developerService.signup(createDeveloperDto);
        }
        catch(err){
            res.status(HttpStatus.NON_AUTHORITATIVE_INFORMATION).json([
                {
                    statusCode: 500,
                    message: [
                        "User already exists",
                    ],
                    error: "NON_AUTHORITATIVE_INFORMATION"
                }
            ]);
        }
    }

    
    @Get('/login')
    async login(@Body() loginDeveloperDto : LoginDeveloperDto): Promise<any>  {
     return await this.developerService.login(loginDeveloperDto);
    }

}