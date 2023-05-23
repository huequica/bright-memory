import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseDocument } from 'bright_memory_backend';

@Schema({ timestamps: true, versionKey: 'versionn' })
export class User {
  // ユーザーの表示名
  @Prop({ required: true })
  screenName: string;

  @Prop({ required: true, unique: true })
  loginName: string;

  @Prop({ required: true })
  passPhrase: string;
}

export type PasswordOmitUser = Omit<User, 'passPhrase'>;
export type UserDocument = User & BaseDocument;
export const UserSchema = SchemaFactory.createForClass(User);
