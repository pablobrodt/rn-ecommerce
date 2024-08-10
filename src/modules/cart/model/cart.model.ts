import { Product } from '@products/model/product.model';

export type Cart = {
  products: Product[];
  productCount: number;
};
