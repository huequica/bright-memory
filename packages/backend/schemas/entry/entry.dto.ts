import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateEntryDTO {
  @IsNotEmpty()
  @IsString()
  url: string;
}

export class UpdateEntryDTO {
  @IsNotEmpty()
  @IsString()
  _id: string;

  @IsString()
  title: string;

  @IsString()
  note: string;

  @IsBoolean()
  isFavorite: boolean;
}
