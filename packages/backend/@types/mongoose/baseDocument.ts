declare module 'bright_memory_backend' {
  import { Document } from 'mongoose';
  interface BaseDocument extends Document {
    createdAt: string;
    updatedAt: string;
  }
}
