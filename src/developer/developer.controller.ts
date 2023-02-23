import { Body, Controller, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { CreateDeveloperDto } from "./dto/create.developer.dto";
import { DeveloperService } from "./developer.service";
import { LoginDeveloperDto } from "./dto/login.developer.dto";


@Controller('developer')
export class DeveloperController {

    constructor(private readonly developerService : DeveloperService) {}

    @Post('/signup')
    async signup(@Body(new ValidationPipe()) createDeveloperDto: CreateDeveloperDto): Promise<CreateDeveloperDto> {
        return await this.developerService.signup(createDeveloperDto);
    }
    
    @Get('/login')
    async login(@Body() loginDeveloperDto : LoginDeveloperDto): Promise<any>  {
     return await this.developerService.login(loginDeveloperDto);
    }

}