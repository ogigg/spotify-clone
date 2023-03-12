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
  },
  {
    label: 'Log Out',
    Icon: ArrowLeftOnRectangleIcon,
    onClick: () => {
      signOut();
    }
  }
];

export default function Sidebar() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session, status);
  }, [session, status]);

  return (
    <div className="h-screen w-60">
      {menuItems.map(item => (
        <SidebarItem
          key={item.label}
          label={item.label}
          Icon={item.Icon}
          onClick={item.onClick}
        ></SidebarItem>
      ))}
    </div>
  );
}
