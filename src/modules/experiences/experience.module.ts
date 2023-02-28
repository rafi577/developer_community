import { ExperienceService } from './experience.service';
import { Module } from "@nestjs/common";
import { ExperienceController } from "./experience.controller";
import { Experience, ExperienceSchema } from 'src/Model/experience.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { developerModule } from 'src/developer/developer.module';


@Module({
    imports: [
        developerModule,
        MongooseModule.forFeature([{ name: Experience.name, schema: ExperienceSchema }])
    ],
    controllers: [ExperienceController],
    providers: [ExperienceService]
})
export class ExperienceModule{}