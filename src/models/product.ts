import {Category} from './category';

export interface Product {
  id: number;
  category?: Category;
  name: string;
  imagePath: string;
  description: string;
  availableCount: number;
  price: number;
  discountedPrice: number;
}
