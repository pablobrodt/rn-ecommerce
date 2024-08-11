import { useCartStore } from '@cart/store/cart/cart.store';
import type { CartProduct } from '@cart/model/cart-product.model';
import type { Product } from '@products/model/product.model';

export function useCartViewModel() {
  const { products, productCount, setProducts } = useCartStore();

  function incrementProductQuantity(id: string): void {
    const newProducts = products.map((product) => {
      if (product.id !== id) {
        return product;
      }

      return { ...product, quantity: product.quantity + 1 };
    });

    setProducts(newProducts);
  }

  function addNewProduct(product: Product): void {
    const cartProduct: CartProduct = {
      ...product,
      quantity: 1,
    };

    setProducts([...products, cartProduct]);
  }

  function addProduct(product: Product): void {
    const hasProduct = Boolean(products.find(({ id }) => id === product.id));

    if (!hasProduct) {
      addNewProduct(product);
      return;
    }

    incrementProductQuantity(product.id);
  }

  function removeProduct(id: string): void {
    const filteredProducts = products.filter((product) => product.id !== id);

    setProducts(filteredProducts);
  }

  return { products, productCount, addProduct, removeProduct };
}
