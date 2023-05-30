import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema as mongooseSchema } from 'mongoose';
import { BaseDocument } from 'bright_memory_backend';
import { User } from '@/schemas/user/user.schema';

@Schema({ timestamps: true, versionKey: 'version' })
export class Entry {
  @Prop({ required: true, type: mongooseSchema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  isFavorite: boolean;

  @Prop()
  note: string;

  @Prop()
  ogImageLink: string;

  // TODO: タグの設計
}

export type EntryDocument = Entry & BaseDocument;
export const EntrySchema = SchemaFactory.createForClass(Entry);
