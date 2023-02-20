import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateDeveloperDto } from "./dto/create.developer.dto";
import { DeveloperService } from "./developer.service";


@Controller('developer')
export class DeveloperController {

    constructor(private readonly developerService : DeveloperService) {}

    @Post()
    create(@Body() createDeveloperDto: CreateDeveloperDto){
        return this.developerService.create(createDeveloperDto);
    }
    
    @Get()
    findAll() {
     return this.developerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.developerService.findOne(+id);
    }



}