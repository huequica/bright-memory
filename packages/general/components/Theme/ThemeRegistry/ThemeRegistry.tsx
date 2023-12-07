'use client';

import { FC, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AlertProvider } from '@/components';
import { defaultTheme } from './theme';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

interface Props {
  children: ReactNode;
}

export const ThemeRegistry: FC<Props> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <>
      <CssBaseline />
      <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <AlertProvider>
          <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </AlertProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
};
