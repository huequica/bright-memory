import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '@/src/auth/auth.service';
import { PasswordOmitUser } from '@/schemas/user/user.schema';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import {
  GetProfileResponse,
  LoginResponse,
  LoginRequestParam,
} from './documentClasses';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  /**
   * `{username: string  password: string;}` をPOSTするとログインを試みる
   * @param req
   */
  @ApiParam({ type: LoginRequestParam, name: 'LoginRequest' })
  @ApiOkResponse({ type: LoginResponse })
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: { user: PasswordOmitUser }) {
    return this.auth.login(req.user);
  }

  @ApiOkResponse({ type: GetProfileResponse })
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  profile(@Request() req: { user: PasswordOmitUser }) {
    return req.user;
  }
}
