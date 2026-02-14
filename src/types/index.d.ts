export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  features?: string[];
}
