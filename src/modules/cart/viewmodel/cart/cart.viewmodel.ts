import type { CartProduct } from '@cart/model/cart-product.model';
import { CartStore } from '@cart/store/cart/cart.store';
import type { Product } from '@products/model/product.model';

export function useCartViewModel(store: CartStore) {
  const { products, productCount, setProducts } = store;

  function increaseProduct(productId: string): void {
    const newProducts = products.map((product) => {
      if (product.id !== productId) {
        return product;
      }

      return { ...product, quantity: product.quantity + 1 };
    });

    setProducts(newProducts);
  }

  function decreaseProduct(productId: string): void {
    const foundProduct = products.find(({ id }) => id === productId);

    if (foundProduct?.quantity === 1) {
      removeProduct(productId);
      return;
    }

    const newProducts = products.map((product) => {
      if (product.id !== productId) {
        return product;
      }

      return { ...product, quantity: product.quantity - 1 };
    });

    setProducts(newProducts);
  }

  function addProduct(product: Product): void {
    const cartProduct: CartProduct = {
      ...product,
      quantity: 1,
    };

    setProducts([...products, cartProduct]);
  }

  function removeProduct(id: string): void {
    const filteredProducts = products.filter((product) => product.id !== id);

    setProducts(filteredProducts);
  }

  function contains(productId: string): boolean {
    return products.some((product) => product.id === productId);
  }

  return {
    products,
    productCount,
    addProduct,
    removeProduct,
    increaseProduct,
    decreaseProduct,
    contains,
  };
}
