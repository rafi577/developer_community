import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { developerModule } from './developer/developer.module';
import { postModule } from './modules/post/post.module';
import { ExperienceModule } from './modules/experiences/experience.module';
import { SkillModule } from './modules/skills/skill.module';
import { CommentModule } from './modules/comment/comment.module';



@Module({

  imports: [developerModule, postModule,ExperienceModule,SkillModule,CommentModule,
    MongooseModule.forRoot('mongodb+srv://tanvir:tanvir@cluster0.r2x6tgi.mongodb.net/?retryWrites=true&w=majority',{dbName : 'Developer'}),
    ],
})
export class AppModule {}
