import { Alert } from './Alert';
import {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'components/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Success Message'
  }
};
