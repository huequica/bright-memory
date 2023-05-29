import { ExtractJwt, Strategy as BaseJwtStrategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User, UserDocument } from '@/schemas/user/user.schema';
import { UsersService } from '@/src/users/users.service';

interface JwtPayload {
  userId: User['loginName'];
  userName: User['screenName'];
}

@Injectable()
export class JwtStrategy extends PassportStrategy(BaseJwtStrategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  /**
   * これの返却値が自動で request に入る
   * @param payload jwt の payload
   * @returns ユーザーのレコード
   */
  async validate(payload: JwtPayload): Promise<UserDocument> {
    try {
      return await this.usersService.find(payload.userId);
    } catch (_) {
      throw new UnauthorizedException();
    }
  }
}
