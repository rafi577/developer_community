import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class UpdateSkillDto{
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsNumber()
    level : number;
}
