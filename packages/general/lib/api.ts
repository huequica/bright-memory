import { AuthApi, EntryApi } from '@/apiClient';
import { getSession } from 'next-auth/react';
import globalAxios from 'axios';

const getAccessToken = async (): Promise<string> => {
  const session = await getSession();
  if (!session) {
    throw new Error('user not authenticated!');
  }

  return session.user.accessToken;
};

const axiosClient = globalAxios.create();
axiosClient.interceptors.request.use(async (config) => {
  const token = await getAccessToken();

  config.headers.Authorization = `bearer ${token}`;
  return config;
});

export const authApi = new AuthApi(undefined, process.env.NEXT_PUBLIC_API_URL);

export const entryApi = new EntryApi(
  undefined,
  process.env.NEXT_PUBLIC_API_URL,
  axiosClient
);
