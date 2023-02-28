import { IsNotEmpty, IsString, MinLength, } from "class-validator";



export class CreateDeveloperDto{
    @IsString()
    @IsNotEmpty()
    phone : string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    constructor(partial: Partial<CreateDeveloperDto>) {
        Object.assign(this, partial);
    }
    
    toJSON() {
        const { password, ...result } = this;
        return result;
    }
}



