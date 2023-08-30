import { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '@/app/login/components/loginForm';
import { action } from '@storybook/addon-actions';

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
