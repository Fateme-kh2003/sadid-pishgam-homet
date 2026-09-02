import type { NavItem } from "./nav";

export interface IconItem {
  icon: React.ElementType;
  label: string;
}

export interface ProjectSummary extends NavItem {
  location: string;
  image: string;
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

export type ContactInfo = {
  address: string;
  phone: string;
  email: string;
  instagram: string;
};