import SidebarItem, { SidebarItemProps } from '../atoms/SidebarItem';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  ArrowLeftOnRectangleIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/solid';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import useSpotify from '../../hooks/useSpotify';

export default function SideBarPlaylistsList() {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[] | null>(null);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then(({ body }) => {
        setPlaylists(body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div>
      {playlists === null && <div>Loading playlists</div>}
      {playlists?.length === 0 && <div>No playlists</div>}
      {playlists &&
        playlists?.length > 0 &&
        playlists.map(playlist => (
          <SidebarItem key={playlist.id} label={playlist.name} Icon={MusicalNoteIcon}></SidebarItem>
        ))}
    </div>
  );
}
