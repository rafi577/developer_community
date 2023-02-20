
import { Module } from "@nestjs/common";
import { SkillController } from "./skill.controller";
import { SkillService } from "./skill.service";



@Module({
    // imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [SkillController],
    providers: [SkillService],
})
export class postModule {}


