import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Entry, EntryDocument } from '@/schemas/entry/entry.schema';
import { UserDocument } from '@/schemas/user/user.schema';

@Injectable()
export class EntryService {
  constructor(
    @InjectModel(Entry.name) private entryModel: Model<EntryDocument>
  ) {}

  async create(url: string, owner: UserDocument): Promise<EntryDocument> {
    const created = new this.entryModel<Entry>({
      url,
      title: 'sample', // TODO: あとでここは動的に取得して返すようにする
      ogpImageLink: '',
      isFavorite: false,
      note: '',
      owner: owner.toJSON(),
    });

    const res = await created.save();
    console.debug(res.createdAt);
    return res;
  }
}
