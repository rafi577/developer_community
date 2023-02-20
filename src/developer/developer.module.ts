import { DeveloperService } from './developer.service';
import { DeveloperController } from './developer.controller';
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";



@Module({
    // imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers: [DeveloperController],
    providers: [DeveloperService]
})
export class developerModule{}