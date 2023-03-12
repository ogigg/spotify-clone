import NextAuth, { AuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';
import { LOGIN_URL, spotifyApi } from '../../../lib/spotify';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: 'e56ced1520194741bbfe1653b7faf821',
      clientSecret: 'ba40be63cc7f4d9e980d5e73844d7063',
      authorization: LOGIN_URL
    })
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // initial sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          userName: account.providerAccountId,
          accessTokenExpires: (account.expires_at ?? 3600) * 1000
        };
      }
      if (Date.now() < (token as any).accessTokenExpires) {
        return token;
      }

      return await refreshAccessToken(token);
    },
    async session({ session, token }: any) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.userName = token.userName;

      return session;
    }
  }
};
export default NextAuth(authOptions);

const refreshAccessToken = async (token: any) => {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token
    };
  } catch (e) {
    console.error(e);
    return token;
  }
};
