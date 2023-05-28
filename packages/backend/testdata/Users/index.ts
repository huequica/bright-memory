import { User as UserSchema } from '@/schemas/user/user.schema';
import { InjectableCollection } from '@node-jeneralize/mti';
import { hashSync } from 'bcrypt';

export interface User extends UserSchema {
  version: number;
  createdAt: string;
  updatedAt: string;
}

const users: User[] = [...new Array(10)].map((_, index) => {
  return {
    screenName: `hogeUser: ${index}`,
    loginName: `hogeUser${index}`,
    passPhrase: hashSync('T00Str0ngP@ssw0rd!', 10),
    version: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
});

export const usersCollection: InjectableCollection<User> = {
  collectionName: 'users',
  documents: users,
};
