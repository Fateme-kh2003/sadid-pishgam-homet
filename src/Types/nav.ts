export interface NavItem {
  path: string;
  label: string;
}

export interface DropdownLink extends NavItem {
  items: NavItem[];
}

export interface AdminNavItem extends NavItem {
  icon: React.ElementType;
}