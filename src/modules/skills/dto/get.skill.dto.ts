import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class GetSkillDto{
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsNumber()
    level : number;
}
