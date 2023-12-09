import { ReactNode } from 'react';
import { Default } from '@/layout/default';
import { ThemeRegistry } from '@/components/Theme/ThemeRegistry/ThemeRegistry';
import { NextAuthProvider } from '@/components/Theme/ThemeRegistry/NextAuthProvider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface Props {
  children: ReactNode;
}

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang="ja">
      <body>
        <NextAuthProvider>
          <ThemeRegistry>
            <Default>{children}</Default>
          </ThemeRegistry>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
