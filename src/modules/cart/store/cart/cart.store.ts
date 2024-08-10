import { create } from 'zustand';
import type { Cart } from '@cart/model/cart.model';
import {
  StoreProperties,
  StoreService,
} from '@common/services/store/store.service';
import { Product } from '@products/model/product.model';

type CartStoreSetters = {
  addProduct: (product: Product) => void;
};

const useZustandStore = create<StoreProperties<Cart> & CartStoreSetters>(
  (set) => ({
    products: [],
    productCount: 0,
    addProduct: (product: Product) =>
      set((state) => ({
        products: [...state.products, product],
        productCount: state.productCount + 1,
      })),
  }),
);

export const useCartStore: StoreService<Cart, CartStoreSetters> = () => {
  const { products, productCount, addProduct } = useZustandStore();

  return {
    products,
    productCount,
    addProduct,
  };
};
