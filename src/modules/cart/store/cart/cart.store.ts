import type { CartProduct } from '@cart/model/cart-product.model';

export interface CartStore {
  products: CartProduct[];
  productCount: number;
  setProducts: (products: CartProduct[]) => void;
}
