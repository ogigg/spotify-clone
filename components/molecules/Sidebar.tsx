import SidebarItem, { SidebarItemProps } from '../atoms/SidebarItem';
import { HomeIcon, MagnifyingGlassIcon, BuildingLibraryIcon } from '@heroicons/react/24/solid';

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

export default function Sidebar() {
  return (
    <div className="h-screen w-60">
      {menuItems.map(item => (
        <SidebarItem key={item.label} label={item.label} Icon={item.Icon}></SidebarItem>
      ))}
    </div>
  );
}
