import { BuiltInProviderType } from 'next-auth/providers';
import { getProviders, signIn } from 'next-auth/react';

export default function Login({ providers }: any) {
  const login = () => {
    signIn(providers.spotify.id, {
      callbackUrl: '/'
    });
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <button
        className="login text-white p-5 rounded-full bg-[#18D860]"
        role="button"
        onClick={login}
      >
        Login via Spotify
      </button>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  };
}
