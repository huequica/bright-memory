import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EntryModule } from './entry/entry.module';
import { BrowserModule } from './browser/browser.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:password@127.0.0.1:53251/bright-memory',
      { authSource: 'admin' }
    ),
    UsersModule,
    AuthModule,
    ConfigModule.forRoot(),
    EntryModule,
    BrowserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
