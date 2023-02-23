import { Developer, DeveloperDocument } from 'src/Model/developer.schema';
import { CreateDeveloperDto } from './dto/create.developer.dto';
import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDeveloperDto } from './dto/login.developer.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DeveloperService{

    constructor(
        @InjectModel(Developer.name) private createDeveloperModel:Model<DeveloperDocument>,
        private jwtService: JwtService,
    ){}

    async signup(createDeveloperDto: CreateDeveloperDto): Promise<CreateDeveloperDto> {
        const {phone,username,password} =createDeveloperDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const data = {
            phone,
            username,
            password : hashedPassword
        }
        const createdDeveloper = await this.createDeveloperModel.create(data);
        return createdDeveloper.save();
    }
    
    async login(loginDeveloperDto : LoginDeveloperDto): Promise<any>{
        const {username,password} = loginDeveloperDto;
        const developer = await this.createDeveloperModel.findOne({username});
        if(developer){
            const isPasswordMatch = await bcrypt.compare(password, developer.password);
            if(isPasswordMatch){
                const token = this.jwtService.sign({ id: developer._id });

                return { token };
                return developer;
            }
        }
        else{
            return loginDeveloperDto;
        }
        return loginDeveloperDto;
    }
}