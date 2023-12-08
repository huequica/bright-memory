import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LoginForm } from '@/app/login/components/loginForm';

const meta: Meta = {
  component: LoginForm,
  title: 'app/login/LoginForm',
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
  },
};
