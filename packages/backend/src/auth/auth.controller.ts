import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '@/src/auth/auth.service';
import { PasswordOmitUser, UserDocument } from '@/schemas/user/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  /**
   * `{username: string  Password: string;}` をPOSTするとログインを試みる
   * @param req
   */
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: { user: PasswordOmitUser }) {
    return this.auth.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  profile(@Request() req: { user: PasswordOmitUser }) {
    return req.user;
  }
}
