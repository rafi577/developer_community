import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExperienceDto {
    @IsString()
    @IsNotEmpty()
    title : string;

    @IsDate()
    start_time : Date;
    @IsDate()
    end_time : Date;

    @IsString()
    @IsNotEmpty()
    description : string;
}


