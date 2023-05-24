import { Module } from '@nestjs/common';
import {} from '@nestjs/config'
import { UsersModule } from '@/src/users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
