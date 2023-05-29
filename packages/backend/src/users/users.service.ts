import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '@/schemas/user/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async find(userId: string, includePassPhrase = false): Promise<UserDocument> {
    return this.userModel
      .findOne({ loginName: userId })
      .select(includePassPhrase ? '+passPhrase' : '');
  }
}
