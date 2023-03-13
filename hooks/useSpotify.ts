import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { spotifyApi } from '../lib/spotify';

export default function useSpotify() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      spotifyApi.setAccessToken((session?.user as any).accessToken);
    }
  }, [session]);

  return spotifyApi;
}
