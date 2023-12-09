import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Entry } from '@/apiClient';
import { EntryCard } from './EntryCard';

const meta = {
  title: 'components/EntryCard',
  component: EntryCard,
} satisfies Meta<typeof EntryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockEntry: Entry = {
  _id: 'sampleId',
  owner: 'sampleOwner',
  createdAt: '',
  updatedAt: '',
  version: 0,
  url: 'https://twitter.com/elonmusk/status/1666964082363371520',
  title: 'Elon Musk on Twitter',
  note: 'sampleNote',
  ogpImageLink: '',
  isFavorite: false,
};

export const Default: Story = {
  args: {
    entry: mockEntry,
    onRemove: action('onRemove'),
    onFavorite: action('onFavorite'),
  },
};
