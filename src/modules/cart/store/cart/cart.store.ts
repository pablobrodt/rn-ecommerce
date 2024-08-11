import { create } from 'zustand';
import type { Store, StoreHook } from '@common/store/store';
import type { Cart } from '@cart/model/cart.model';
import type { CartProduct } from '@cart/model/cart-product.model';

type CartStoreSetters = {
  setProducts: (products: CartProduct[]) => void;
};

export type CartStore = Store<Cart, CartStoreSetters>;

const useZustandStore = create<CartStore>((set) => ({
  products: [],
  productCount: 0,
  setProducts: (products: CartProduct[]) =>
    set(() => ({
      products,
      productCount: products.length,
    })),
}));

export const useCartStore: StoreHook<
  Cart,
  CartStoreSetters
> = (): CartStore => {
  const { products, productCount, setProducts } = useZustandStore();

  return {
    products,
    productCount,
    setProducts,
  };
};
