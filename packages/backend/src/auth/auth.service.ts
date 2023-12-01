import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { PasswordOmitUser, User } from '@/schemas/user/user.schema';
import { UsersService } from '@/src/users/users.service';

interface JwtPayload {
  userId: User['loginName'];
  userName: User['screenName'];
}

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  async validateUser(
    name: User['loginName'],
    pass: User['passPhrase']
  ): Promise<PasswordOmitUser> {
    const user = await this.usersService.find(name, true);

    if (!compareSync(pass, user.passPhrase)) {
      throw new Error('Authentication Failed!');
    }

    // パスワードを排除したものを返す
    return {
      loginName: user.loginName,
      screenName: user.screenName,
    };
  }

  // jwt token を返す
  async login(user: PasswordOmitUser) {
    const payload: JwtPayload = {
      userId: user.loginName,
      userName: user.screenName,
    };

    return {
      id: user.loginName,
      name: user.screenName,
      access_token: this.jwtService.sign(payload),
    };
  }
}
