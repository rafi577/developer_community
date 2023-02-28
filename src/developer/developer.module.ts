import { Developer, DeveloperSchema } from 'src/Model/developer.schema';
import { DeveloperService } from './developer.service';
import { DeveloperController } from './developer.controller';
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';




@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
        secret:'secret',
        signOptions:{
            expiresIn: '3d',
        }
        }),
        MongooseModule.forFeature([{ name: Developer.name, schema: DeveloperSchema }])
    ],
    controllers: [DeveloperController],
    providers: [DeveloperService,JwtStrategy],
    exports: [DeveloperService,PassportModule],
})
export class developerModule{}