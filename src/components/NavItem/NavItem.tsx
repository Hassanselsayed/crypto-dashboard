import type { IconType } from "react-icons";
import "./NavItem.scss";

interface NavItem {
  icon: IconType;
  title: string;
  isActive?: boolean;
  className?: string;
}

export default function NavItem({
  icon: Icon,
  title,
  isActive,
  className,
}: NavItem) {
  return (
    <div className={`nav-item ${isActive ? "active" : ""} ${className}`}>
      <Icon className="nav-item__icon" />
      <span className="nav-item__title">{title}</span>
    </div>
  );
}
