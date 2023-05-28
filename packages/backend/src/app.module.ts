import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@/src/users/users.module';
import { AuthModule } from '@/src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:password@127.0.0.1:53251/bright-memory',
      { authSource: 'admin' }
    ),
    UsersModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
