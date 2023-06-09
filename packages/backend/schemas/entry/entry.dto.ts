import {
  IsBoolean,
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

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

export class SearchEntryDTO {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  note: string;

  @IsOptional()
  @IsString()
  url: string;

  @IsOptional()
  @IsBoolean()
  isFavorite: boolean;
}
