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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEntryDTO {
  @ApiProperty()
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
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @Min(0)
  pageNumber: number;

  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @Max(20)
  @Min(0)
  size: number;

  @ApiPropertyOptional({ enumName: 'sortOperators', enum: SortVariables })
  @IsOptional()
  @IsString()
  @IsEnum(SortVariables)
  sort: typeof SortVariables[keyof typeof SortVariables];

  @ApiPropertyOptional({ enumName: 'orderOperators', enum: OrderVariables })
  @IsOptional()
  @IsString()
  @IsEnum(OrderVariables)
  order: typeof OrderVariables[keyof typeof OrderVariables];
}

export class SearchEntryDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  note: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  url: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isFavorite: boolean;

  @ApiPropertyOptional()
  @IsDefined()
  @ValidateNested()
  @Type(() => Pagination)
  pagination: Pagination;
}
