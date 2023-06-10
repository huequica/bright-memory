import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Entry, EntryDocument } from '@/schemas/entry/entry.schema';
import { UserDocument } from '@/schemas/user/user.schema';
import { BrowserService } from '@/src/browser/browser.service';
import { SearchEntryDTO } from '@/schemas/entry/entry.dto';

@Injectable()
export class EntryService {
  constructor(
    @InjectModel(Entry.name) private entryModel: Model<EntryDocument>,
    private browser: BrowserService
  ) {}

  async create(url: string, owner: UserDocument): Promise<EntryDocument> {
    const { title, ogpImageLink } = await this.browser.getWebPageDetails(url);

    const created = new this.entryModel<Entry>({
      url,
      title,
      ogpImageLink,
      isFavorite: false,
      note: '',
      owner: owner.toJSON(),
    });

    const res = await created.save();
    console.debug(res.createdAt);
    return res;
  }

  async find(id: string, owner: UserDocument): Promise<EntryDocument> {
    const res = await this.entryModel.findOne({ _id: id, owner: owner }).exec();
    if (!res) {
      throw new NotFoundException(`${id} is not found!`);
    }
    return res;
  }

  async search(
    search: SearchEntryDTO,
    user: UserDocument
  ): Promise<EntryDocument[]> {
    const maximumDocumentLength = search.pagination.size;

    // pagination が余分なので排除してから find に入れる
    const filteredSearchParams = Object.fromEntries(
      Object.entries(search).filter(([key]) => ['pagination'].includes(key))
    );

    // TODO: ソートを実装
    return this.entryModel
      .find({ ...filteredSearchParams, owner: user })
      .limit(maximumDocumentLength)
      .skip(search.pagination.pageNumber * maximumDocumentLength)
      .exec();
  }
}
