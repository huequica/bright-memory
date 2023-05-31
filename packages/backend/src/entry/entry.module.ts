import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Entry, EntrySchema } from '@/schemas/entry/entry.schema';
import { modifyQuery } from '@/src/core/modifyQuery';

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
  controllers: [],
  providers: [],
})
export class EntryModule {}
