'use client';
import { NextPage } from 'next';
import { EntryCard } from '@/components/EntryCard/EntryCard';
import { Grid } from '@/components';
import { useEntries } from './_hooks/entry';

const Home: NextPage = () => {
  const { data, isLoading } = useEntries({ pageNumber: 0 });
  if (!data || isLoading) {
    return <>Loading...</>;
  }

  return (
    <Grid container justifyContent="center" spacing={4}>
      {data.map((entry, index) => {
        return (
          <Grid item key={`entry-${index}`}>
            <EntryCard
              entry={entry}
              onRemove={(entry) => {
                // TODO: 正規の実装に置き換え
                console.debug('remove:', entry);
              }}
              onFavorite={(entry, remove) => {
                // TODO: 正規の実装に置き換え
                console.debug('favorite:', entry, remove);
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
