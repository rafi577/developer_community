import { IsNotEmpty, IsString, MinLength, } from "class-validator";



export class LoginDeveloperDto{
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

}



