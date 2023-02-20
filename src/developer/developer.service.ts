import { CreateDeveloperDto } from './dto/create.developer.dto';
import { Injectable } from "@nestjs/common";



@Injectable()
export class DeveloperService{
    create(createDeveloperDto: CreateDeveloperDto) {
        return 'this is for create new developer';
    }
    //return all the developers
    findAll() {
        return `This action returns all dev`;
    }
    
    findOne(id: number) {
        return `This action returns a #${id} dev`;
    }
}