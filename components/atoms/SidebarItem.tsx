export interface SidebarItemProps {
  Icon: React.ElementType;
  label: string;
  onClick?: () => void;
}

export default function SidebarItem({ Icon, label, onClick }: SidebarItemProps) {
  return (
    <div
      className="px-5 py-2 cursor-pointer text-slate-300 hover:text-white flex gap-2"
      onClick={() => (onClick ? onClick() : null)}
    >
      <Icon className="w-5 h-5" />
      {label}
    </div>
  );
}
