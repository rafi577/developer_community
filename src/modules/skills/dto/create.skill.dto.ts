import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export enum level{
    ONE=1,
    TWO=2,
    THREE=3
}
export class CreateSkillDto{
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsEnum(level)
    level : number;
}

// skills = {
//     _id: devId,
//     name:
//     level:
//     created_at://automatic
//     updated_at://automatic
// }