import { IsNotEmpty, IsString, MinLength, } from "class-validator";
export class GetPostDto{
    devId:string;
    title: string;
    description : string;
}
