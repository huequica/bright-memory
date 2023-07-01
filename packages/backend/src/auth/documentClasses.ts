import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestParam {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

export class LoginResponse {
  @ApiProperty()
  access_token: string;
}

export class GetProfileResponse {
  @ApiProperty({ description: 'for internal management' })
  readonly _id: string;

  @ApiProperty()
  readonly screenName: string;

  @ApiProperty()
  readonly loginName: string;

  @ApiProperty()
  version: number;

  @ApiProperty({ description: 'ISO String Date' })
  createdAt: string;

  @ApiProperty({ description: 'ISO String Date' })
  updatedAt: string;
}
