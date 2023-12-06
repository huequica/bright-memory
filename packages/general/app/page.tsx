'use client';
import { NextPage } from 'next';
import { useEntries } from './_hooks/entry';

const Home: NextPage = () => {
  const { data, isLoading } = useEntries({ pageNumber: 0 });
  if (!data || isLoading) {
    return <>Loading...</>;
  }

  return <>hogehoge</>;
};

export default Home;
