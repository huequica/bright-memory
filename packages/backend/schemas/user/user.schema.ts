import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseDocument } from 'bright_memory_backend';

@Schema({ timestamps: true, versionKey: 'version' })
export class User {
  // ユーザーの表示名
  @Prop({ required: true })
  screenName: string;

  @Prop({ required: true, unique: true })
  loginName: string;

  @Prop({ required: true, select: false })
  passPhrase: string;
}

export type PasswordOmitUser = Omit<User, 'passPhrase'>;
export type UserDocument = User & BaseDocument;
export type PasswordOmitUserDocument = Omit<User, 'passPhrase'>;
export const UserSchema = SchemaFactory.createForClass(User);
