import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { GlobalDrawer } from './GlobalDrawer';

const meta = {
  title: 'components/GlobalDrawer',
  component: GlobalDrawer,
  argTypes: {
    open: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof GlobalDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onMove: action('onMove'),
    onClose: action('onClose'),
    onLogout: action('onLogout'),
  },
};
