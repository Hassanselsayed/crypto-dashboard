import type { IconType } from "react-icons";

interface NavItem {
  icon: IconType;
  title: string;
  isActive?: boolean;
}

export default function NavItem({ icon: Icon, title, isActive }: NavItem) {
  return (
    <div className={`nav-item ${isActive && "active"}`}>
      <Icon className="icon" />
      <span className="title">{title}</span>
    </div>
  );
}
