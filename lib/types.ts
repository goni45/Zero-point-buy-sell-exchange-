export type Condition = "New" | "Used" | "Refurbished";

export type Category = "Phones" | "Accessories" | "Laptops";

export interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  condition: Condition;
  category: Category;
  image: string;
  description: string;
  isFeatured: boolean;
}

export const categories: Category[] = ["Phones", "Accessories", "Laptops"];

export const conditions: ("All" | Condition)[] = ["All", "New", "Used", "Refurbished"];
