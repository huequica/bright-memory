import type { Decorator, Preview } from '@storybook/react';
import { ThemeRegistry } from '@/components/Theme/ThemeRegistry/ThemeRegistry';

// Import your fontface CSS files here
// Don't have any? We recommend installing and using @fontsource/roboto

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
  decorators: [
    (Story) => (
      <ThemeRegistry>
        <Story />
      </ThemeRegistry>
    ),
  ],
};

export default preview;
