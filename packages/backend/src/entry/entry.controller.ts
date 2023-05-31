import { Controller, UseGuards, Post, Body, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EntryService } from './entry.service';
import { CreateEntryDTO } from '@/schemas/entry/entry.dto';
import { UserDocument } from '@/schemas/user/user.schema';

@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  protected async createEntry(
    @Body() createEntry: CreateEntryDTO,
    @Request() req: { user: UserDocument }
  ) {
    return this.entryService.create(createEntry.url, req.user);
  }
}
