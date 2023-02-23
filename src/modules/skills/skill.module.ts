
import { Module } from "@nestjs/common";
import { SkillController } from "./skill.controller";
import { SkillService } from "./skill.service";
import { Skill, SkillSchema } from "src/Model/skill.schema";
import { MongooseModule } from "@nestjs/mongoose";



@Module({
    imports: [MongooseModule.forFeature([{ name: Skill.name, schema: SkillSchema }])],
    controllers: [SkillController],
    providers: [SkillService],
})
export class SkillModule {}


