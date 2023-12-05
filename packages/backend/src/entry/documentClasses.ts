import { ApiProperty } from '@nestjs/swagger';

export class Entry {
  @ApiProperty({ description: 'for internal management' })
  _id: string;

  @ApiProperty()
  owner: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  note: string;

  @ApiProperty()
  ogpImageLink: null | string;

  @ApiProperty()
  isFavorite: boolean;

  @ApiProperty()
  version: number;

  @ApiProperty({ description: 'ISO String Date' })
  createdAt: string;

  @ApiProperty({ description: 'ISO String Date' })
  updatedAt: string;
}
