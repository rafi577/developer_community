import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { developerModule } from './developer/developer.module';


@Module({

  imports: [developerModule, 
    MongooseModule.forRoot('mongodb+srv://tanvir:tanvir@cluster0.r2x6tgi.mongodb.net/?retryWrites=true&w=majority',{dbName : 'Developer'})],
})
export class AppModule {}
