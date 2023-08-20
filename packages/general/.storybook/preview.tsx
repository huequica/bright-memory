import type { Decorator, Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import { defaultTheme } from '@/components/Theme/ThemeRegistry/theme';

export const decorators: Decorator[] = [
  (Story, context) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    );
  },
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
