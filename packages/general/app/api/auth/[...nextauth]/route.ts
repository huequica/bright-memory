import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
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
      name: 'signIn',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const res = await authApi.login(
          credentials.email,
          credentials.password
        );

        console.log(res.data.accessToken);
        return res.data;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt: ({ token, user }) => {
      token.id = user.id;
      token.name = user.name;
      return token;
    },

    session: ({ session, token }) => {
      session.user.id = token.id;
      session.user.name = token.name;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
