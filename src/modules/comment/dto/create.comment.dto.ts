import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {

    @IsString()
    @IsNotEmpty()
    comment: string;

}


