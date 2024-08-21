import { create } from 'zustand';
import { CartProduct } from '@cart/model/cart-product.model';

import { CartStore } from './cart.store';

const useZustandStore = create<CartStore>((set) => ({
  products: [],
  productCount: 0,
  setProducts: (products: CartProduct[]) =>
    set(() => ({
      products,
      productCount: products.length,
    })),
}));

export function useZustandCartStore(): CartStore {
  const { products, productCount, setProducts } = useZustandStore();

  return {
    products,
    productCount,
    setProducts,
  };
}
