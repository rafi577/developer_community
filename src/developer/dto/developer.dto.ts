import { IsNotEmpty, IsString, MinLength, } from "class-validator";



export class DeveloperDto{
    @IsString()
    @IsNotEmpty()
    phone : string;

    @IsString()
    @IsNotEmpty()
    username: string;

    createdAt: Date;
    updatedAt: Date;
}



