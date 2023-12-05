'use client';
import { NextPage } from 'next';
import { useEntries } from '@/app/_hooks/entry';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const session = useSession();

  const isSessionReady = !!session.data;

  const { data, isLoading } = useEntries(
    { size: 20, pageNumber: 0 },
    isSessionReady
  );
  if (!data || isLoading) {
    return <>Loading...</>;
  }

  console.log(data);
  return <>hogehoge</>;
};

export default Home;
