export interface NavItem {
  path: string;
  label: string;
}

export interface DropdownLink extends NavItem {
  items: NavItem[];
}

export interface IconItem {
  icon: React.ElementType;
  label: string;
}

export interface ProjectSummary extends NavItem {
  location: string;
  image: string;
}

export interface ServiceItem extends NavItem {
  description: string;
  icon: React.ElementType;
}

export type ProjectDetail = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};