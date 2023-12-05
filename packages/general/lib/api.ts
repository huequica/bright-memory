import { AuthApi, EntryApi } from '@/apiClient';

export const authApi = new AuthApi(undefined, process.env.NEXT_PUBLIC_API_URL);
export const entryApi = new EntryApi(
  undefined,
  process.env.NEXT_PUBLIC_API_URL
);
