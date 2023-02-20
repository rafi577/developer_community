import { ExperienceService } from './experience.service';
import { Module } from "@nestjs/common";
import { ExperienceController } from "./experience.controller";


@Module({
    // imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [ExperienceController],
    providers: [ExperienceService]
})
export class ExperienceModule{}