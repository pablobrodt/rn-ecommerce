import { CartProduct } from './cart-product.model';

export type Cart = {
  products: CartProduct[];
  productCount: number;
};
