import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '@/schemas/user/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async find(userId: string, includePassPhrase = false): Promise<any> {
    return this.userModel
      .findOne({ name: userId })
      .select(includePassPhrase ? '+passPhrase' : undefined);
  }
}
