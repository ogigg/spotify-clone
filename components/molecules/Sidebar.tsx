import SidebarItem, { SidebarItemProps } from '../atoms/SidebarItem';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/solid';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { spotifyApi } from '../../lib/spotify';
import useSpotify from '../../hooks/useSpotify';
import SideBarPlaylistsList from './SideBarPlaylistsList';

const menuItems: SidebarItemProps[] = [
  {
    label: 'Home',
    Icon: HomeIcon
  },
  {
    label: 'Search',
    Icon: MagnifyingGlassIcon
  },
  {
    label: 'Library',
    Icon: BuildingLibraryIcon
  }
];

const logoutMenuItem: SidebarItemProps = {
  label: 'Log Out',
  Icon: ArrowLeftOnRectangleIcon,
  onClick: () => {
    signOut();
  }
};

export default function Sidebar() {
  const { status } = useSession();

  return (
    <div className="h-screen w-60 flex flex-col justify-between py-2">
      <div>
        {menuItems.map(item => (
          <SidebarItem
            key={item.label}
            label={item.label}
            Icon={item.Icon}
            onClick={item.onClick}
          ></SidebarItem>
        ))}
      </div>
      <SideBarPlaylistsList />
      {status === 'authenticated' && (
        <div>
          <SidebarItem
            key={logoutMenuItem.label}
            label={logoutMenuItem.label}
            Icon={logoutMenuItem.Icon}
            onClick={logoutMenuItem.onClick}
          ></SidebarItem>
        </div>
      )}
    </div>
  );
}
