import { Entry as EntrySchema } from '@/schemas/entry/entry.schema';
import { InjectableCollection } from '@node-jeneralize/mti';

export interface Entry extends Omit<EntrySchema, 'owner'> {
  owner: string;
  version: number;
  createdAt: string;
  updatedAt: string;
}

const entries: Entry[] = [...new Array(10)].map((_, index) => {
  return {
    owner: `#users-${index > 9 ? index % 10 : index}`,
    url: 'https://twitter.com/elonmusk/status/1666964082363371520',
    title: 'Elon Musk on Twitter',
    note: 'Posted From MTI',
    ogpImageLink: null,
    isFavorite: false,
    version: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
});

export const entriesCollection: InjectableCollection<Entry> = {
  collectionName: 'entries',
  documents: entries,
};
