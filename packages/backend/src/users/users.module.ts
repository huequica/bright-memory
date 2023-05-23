import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@/schemas/user/user.schema';
import { UsersService } from '@/src/users/users.service';
import { modifyQuery } from '@/src/core/modifyQuery';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          return modifyQuery(UserSchema);
        },
      },
    ]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
