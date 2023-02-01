import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Spinner from '../../components/atoms/Spinner';

export default function CallbackHandler() {
  const router = useRouter();
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('SPOTIFY_API_TOKEN');
    if (!token && !!hash) {
      token = hash
        .substring(1)
        .split('&')
        .find(elem => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('SPOTIFY_API_TOKEN', token);
      router.push('/');
    }
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Spinner />
    </div>
  );
}
