import { AuthSchProfile, AuthSchScope, Strategy } from '@kir-dev/passport-authsch';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';

import { AuthService } from './auth.service';

@Injectable()
export class AuthSchStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      clientId: process.env.AUTHSCH_CLIENT_ID,
      clientSecret: process.env.AUTHSCH_CLIENT_SECRET,
      scopes: [AuthSchScope.BASIC, AuthSchScope.FIRST_NAME, AuthSchScope.LAST_NAME, AuthSchScope.EMAIL],
    });
  }

  async validate(userProfile: AuthSchProfile): Promise<User> {
    return await this.authService.findOrCreateUser(userProfile);
  }
}
