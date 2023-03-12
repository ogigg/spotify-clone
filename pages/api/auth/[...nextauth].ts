import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET as string
    })
  ]
};
export default NextAuth(authOptions);
