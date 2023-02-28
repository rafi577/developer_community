import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { DeveloperService } from './developer.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly developerService : DeveloperService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //   ignoreExpiration: false,
      secretOrKey:'secret',
    });
  }

  async validate(payload: any) {//i'll return the the data from this function later
    const {username} = payload;
    const developer = this.developerService.getDeveloper(username);
    return developer;
  }
}
