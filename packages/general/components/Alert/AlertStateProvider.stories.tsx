'use client';
import { Meta, StoryObj } from '@storybook/react';
import { AlertProvider, useAlert } from './AlertStateProvider';
import { FC } from 'react';
import { AlertType } from './Alert';
import { Button, Stack } from '@/components';

const meta = {
  title: 'components/AlertProvider',
  component: AlertProvider,
} satisfies Meta<typeof AlertProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <AlertProvider>
        <Stack spacing={2}>
          <Component type={'success'} />
          <Component type={'info'} />
          <Component type={'error'} />
          <Component type={'warning'} />
        </Stack>
      </AlertProvider>
    );
  },
};

const Component: FC<{ type: AlertType }> = ({ type }) => {
  const { open } = useAlert();
  return (
    <Button
      onClick={async () => {
        await open(type, type);
      }}
    >
      {type}
    </Button>
  );
};
