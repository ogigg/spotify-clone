export default function Login() {
  const RESPONSE_TYPE = 'token';
  console.log(process.env);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <a
        href={`${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a>
      <button className="login" role="button">
        Login via Spotify
      </button>
    </div>
  );
}
