import {
  Controller,
  UseGuards,
  Post,
  Body,
  Request,
  Get,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EntryService } from './entry.service';
import { Entry } from './documentClasses';
import { CreateEntryDTO, SearchEntryDTO } from '@/schemas/entry/entry.dto';
import { UserDocument } from '@/schemas/user/user.schema';
import { EntryDocument } from '@/schemas/entry/entry.schema';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('entry')
@UseGuards(AuthGuard('jwt'))
@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Post('new')
  protected async createEntry(
    @Body() createEntry: CreateEntryDTO,
    @Request() req: { user: UserDocument }
  ) {
    return this.entryService.create(createEntry.url, req.user);
  }

  @Get(':entryId')
  protected async find(
    @Param('entryId') entryId: string,
    @Request() req: { user: UserDocument }
  ): Promise<EntryDocument> {
    return this.entryService.find(entryId, req.user);
  }

  /**
   * TODO: 検索の件数とページングの実装
   */
  @ApiOkResponse({ type: [Entry] })
  @Post('search')
  async search(
    @Body() search: SearchEntryDTO,
    @Request() req: { user: UserDocument }
  ) {
    console.log(search);
    return this.entryService.search(search, req.user);
  }
}
