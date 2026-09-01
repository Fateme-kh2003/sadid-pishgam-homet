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
export interface ServiceItemCard extends NavItem{
  icon:React.ElementType;
  description: string;
}

export interface ProjectSummary extends NavItem {
  location: string;
  image: string;
}

export interface IconItem {
  icon: React.ElementType;
  label: string;
}

export type ProjectDetail = {
  id: string;
  title: string;
  description: string;
  image: string;
  location?: string;
  features: string[];
};

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  path: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export type StatCard = {
  label: string;
  value: number;
  icon: React.ElementType;
};

export type ContactInfo = {
  address: string;
  phone: string;
  email: string;
  instagram: string;
};

export type DetailCardProps = {
  item: ProjectDetail;
  reverse?: boolean;
};

type FieldType = "text" | "textarea" | "select";

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
};
