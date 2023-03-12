import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
  'user-read-email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'streaming',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played'
].join(',');

const params = {
  scopes
};

const queryParamString = new URLSearchParams(params).toString();

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString}`;

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET as string
});
