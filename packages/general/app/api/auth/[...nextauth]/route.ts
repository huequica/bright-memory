import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import { authApi } from '@/lib';

/**
 * @see https://zenn.dev/junnuj/articles/fb0ca45967c6c2
 */
const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      id: 'signIn',
      name: 'signIn',
      credentials: {
        id: { label: 'id', type: 'string' },
        password: { label: 'password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.id || !credentials?.password) {
          return null;
        }

        const res = await authApi.login(credentials.id, credentials.password);

        return res.data;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.accessToken = user.accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
