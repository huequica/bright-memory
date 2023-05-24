import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@/src/users/users.module';

@Module({
  imports: [UsersModule, ConfigModule.forRoot()],
})
export class AppModule {}
