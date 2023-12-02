import { AuthApi } from '@/apiClient';

export const authApi = new AuthApi(undefined, process.env.API_URL);
