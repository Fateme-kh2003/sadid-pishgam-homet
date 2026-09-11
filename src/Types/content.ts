import type { NavItem } from "./nav";

export type BaseEntity = {
  id: string;
};

export type TitleDescriptionContent = {
  title: string;
  description: string;
};

export type ImageContent = {
  image: string;
};

export interface IconItem {
  icon: React.ElementType;
  label: string;
}

export interface ProjectSummary extends NavItem {
  location: string;
  image: string;
}

export type ProjectDetail =BaseEntity & TitleDescriptionContent & ImageContent & {
  location?: string;
  features: string[];
};

export interface ServiceItem extends BaseEntity , TitleDescriptionContent{
  emoji?: string;
  image: string;
  features: string[];
}

export interface TeamMember extends BaseEntity, ImageContent{
  name: string;
  role: string;
  description: string;
}

export type ContactInfo = {
  address: string;
  phone: string;
  email: string;
  instagram: string;
};


export type AboutHomeContent = TitleDescriptionContent & ImageContent;

export type HeroContent = TitleDescriptionContent & {
  image1: string;
  image2: string;
  image3: string;
};

export type ServicesIntroContent = TitleDescriptionContent & {
  subtitle: string;
};