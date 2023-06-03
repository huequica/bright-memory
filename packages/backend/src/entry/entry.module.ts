import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Entry, EntrySchema } from '@/schemas/entry/entry.schema';
import { modifyQuery } from '@/src/core/modifyQuery';
import { EntryService } from './entry.service';
import { EntryController } from './entry.controller';
import { BrowserModule } from '@/src/browser/browser.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Entry.name,
        useFactory: () => {
          return modifyQuery(EntrySchema);
        },
      },
    ]),
    BrowserModule,
  ],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
