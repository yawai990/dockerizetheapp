import NextAuth, { Account, AuthOptions, User as AuthUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOption: AuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 14 * 24 * 60 * 60, // 14 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    CredentialsProvider({
      id: 'credentials-login',
      type: 'credentials',
      name: 'Credentials',

      credentials: {
        username: {
          label: 'username',
          type: 'string',
          placeholder: 'username',
        },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'password',
        },
      },

      async authorize(credentials) {
        // this should be the defined user in the database
        const user = { id: '1', username: 'thomas', password: 'thomas' };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
