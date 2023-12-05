import { AuthApi, EntryApi } from '@/apiClient';

export const authApi = new AuthApi(undefined, process.env.API_URL);
export const entryApi = new EntryApi(undefined, process.env.API_URL);
