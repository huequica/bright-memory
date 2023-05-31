import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Entry, EntrySchema } from '@/schemas/entry/entry.schema';
import { modifyQuery } from '@/src/core/modifyQuery';
import { EntryService } from './entry.service';
import { EntryController } from './entry.controller';

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
  ],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
