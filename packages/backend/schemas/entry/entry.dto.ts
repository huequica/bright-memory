import {
  IsBoolean,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEntryDTO {
  @IsNotEmpty()
  @IsUrl()
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

const SortVariables = {
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
} as const;

const OrderVariables = {
  desc: 'desc',
  asc: 'asc',
} as const;

export class Pagination {
  @IsDefined()
  @IsNumber()
  @Min(0)
  pageNumber: number;

  @IsDefined()
  @IsNumber()
  @Max(20)
  @Min(0)
  size: number;

  @IsOptional()
  @IsString()
  @IsEnum(SortVariables)
  sort: typeof SortVariables[keyof typeof SortVariables];

  @IsOptional()
  @IsString()
  @IsEnum(OrderVariables)
  order: typeof OrderVariables[keyof typeof OrderVariables];
}

export class SearchEntryDTO {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  note: string;

  @IsOptional()
  @IsUrl()
  url: string;

  @IsOptional()
  @IsBoolean()
  isFavorite: boolean;

  @IsDefined()
  @ValidateNested()
  @Type(() => Pagination)
  pagination: Pagination;
}
