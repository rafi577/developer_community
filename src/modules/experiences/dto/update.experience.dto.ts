import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateExperienceDto {
    @IsString()
    @IsNotEmpty()
    title : string;

 //   @IsDate()
    @IsString()
    @IsNotEmpty()
    start_time : Date;
   // @IsDate()
    @IsString()
    @IsNotEmpty()
    end_time : Date;

    @IsString()
    @IsNotEmpty()
    description : string;
}


