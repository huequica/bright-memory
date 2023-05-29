import { mti } from '@node-jeneralize/mti';
import { insertCollections } from '@/testdata/collections';

const uri = 'mongodb://root:password@127.0.0.1:53251';

mti({
  uri,
  insertCollections,
  dbName: 'bright-memory',
  clientOptions: {
    authSource: 'admin',
  },
})
  .then(() => {
    console.log('All test data post succeed!');
  })
  .catch(() => console.dir);
