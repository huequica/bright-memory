import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Entry, EntryDocument } from '@/schemas/entry/entry.schema';
import { UserDocument } from '@/schemas/user/user.schema';
import { BrowserService } from '@/src/browser/browser.service';

@Injectable()
export class EntryService {
  constructor(
    @InjectModel(Entry.name) private entryModel: Model<EntryDocument>,
    private browser: BrowserService
  ) {}

  async create(url: string, owner: UserDocument): Promise<EntryDocument> {
    const { title } = await this.browser.getWebPageDetails(url);

    const created = new this.entryModel<Entry>({
      url,
      title,
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
