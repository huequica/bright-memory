import { Preview, Decorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import { defaultTheme } from '@/components/Theme/ThemeRegistry/theme';

export const decorators: Decorator[] = [
  (Story, context) => {
    return (
      <Emotion10ThemeProvider theme={defaultTheme}>
        <ThemeProvider theme={defaultTheme}>
          <Story {...context} />
        </ThemeProvider>
      </Emotion10ThemeProvider>
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
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
