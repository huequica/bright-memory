'use client';

import { FC, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AlertProvider } from '@/components';
import { defaultTheme } from './theme';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface Props {
  children: ReactNode;
}

export const ThemeRegistry: FC<Props> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const queryClient = new QueryClient();
  return (
    <>
      <CssBaseline />
      <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <QueryClientProvider client={queryClient}>
          <AlertProvider>
            <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
          </AlertProvider>
        </QueryClientProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
};
