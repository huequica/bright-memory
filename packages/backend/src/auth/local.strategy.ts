import { Strategy as BaseLocalStrategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '@/src/auth/auth.service';
import { User, PasswordOmitUser } from '@/schemas/user/user.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(BaseLocalStrategy) {
  constructor(private authService: AuthService) {
    super();
  }

  /**
   * ここが AuthGuard() によって先に実行される
   * @param name ユーザ名
   * @param pass パスワード
   */
  async validate(
    name: User['loginName'],
    pass: User['passPhrase']
  ): Promise<PasswordOmitUser> {
    try {
      return await this.authService.validateUser(name, pass);
    } catch (_) {
      console.log(_);
      throw new UnauthorizedException();
    }
  }
}
