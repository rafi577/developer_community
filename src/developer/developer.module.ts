import { Developer, DeveloperSchema } from 'src/Model/developer.schema';
import { DeveloperService } from './developer.service';
import { DeveloperController } from './developer.controller';
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';



@Module({
    imports: [
        PassportModule,
        JwtModule.register({
          secret: 'jwtConstants.secret',
          signOptions: { expiresIn: '60s' },
        }), 
        MongooseModule.forFeature([{ name: Developer.name, schema: DeveloperSchema }])
    ],
    controllers: [DeveloperController],
    providers: [DeveloperService]
})
export class developerModule{}