import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '@/src/auth/auth.service';
import { UsersModule } from '@/src/users/users.module';
import { JwtStrategy } from '@/src/auth/jwt.strategy';
import { LocalStrategy } from '@/src/auth/local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,

    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          secret: 'SuperSecretKeyOfKing',
          signOptions: {
            expiresIn: '31 d',
          },
        };
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
