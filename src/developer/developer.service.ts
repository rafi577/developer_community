import { Developer, DeveloperDocument } from 'src/Model/developer.schema';
import { CreateDeveloperDto } from './dto/create.developer.dto';
import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException, Res } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDeveloperDto } from './dto/login.developer.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DeveloperService{

    constructor(
        @InjectModel(Developer.name) private developerModel:Model<DeveloperDocument>,
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
            const createdDeveloper = await this.developerModel.create(data);
            createdDeveloper.save();
            // return new CreateDeveloperDto(data);
             
            return new CreateDeveloperDto(data);
        
    }

    async login(loginDeveloper:LoginDeveloperDto):Promise<any>{
        const {username, password} = loginDeveloper;
        const developer = await this.developerModel.findOne({username:username});
        // console.log(developer);
        const isPasswordMatch = await bcrypt.compare(password, developer.password);
        if(developer && isPasswordMatch){
            const id = developer._id;
            const payload = {username,id};
            const accessToken = this.jwtService.sign(payload);
            return {accessToken: accessToken};
        }
        else{
            throw new NotFoundException('Something bad happened', 
            { 
                 cause: new Error(), 
                 description: 'User not found' 
            })
        }
    }

    async getDeveloper(username):Promise<any>{
        const developer = await this.developerModel.findOne({username: username});
        return developer;
    }
    
    // async login(loginDeveloperDto : LoginDeveloperDto): Promise<any>{
    //     const {username,password} = loginDeveloperDto;
    //     const developer = await this.createDeveloperModel.findOne({username: username});
    //     if(developer){
    //         const isPasswordMatch = await bcrypt.compare(password, developer.password);
    //         if(isPasswordMatch){
    //             const devUser = await this.createDeveloperModel.findOne({username: developer.username});
    //             // const id = devUser._id;
    //             // console.log(id)
    //             const token = this.jwtService.sign({userId: devUser._id},{
    //                 expiresIn: '3d'
    //             });
    //             return {access:  token };
    //         }else{
    //             throw new HttpException('Pass not match', HttpStatus.NOT_FOUND);
    //         }
    //     }
    //     else{
    //         throw new HttpException('user not Found', HttpStatus.NOT_FOUND);
    //     }
    // }

}
