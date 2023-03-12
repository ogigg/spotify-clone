import SidebarItem, { SidebarItemProps } from '../atoms/SidebarItem';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/solid';
import { signOut } from 'next-auth/react';

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
      console.log('logałt');
      signOut();
    }
  }
];

export default function Sidebar() {
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
