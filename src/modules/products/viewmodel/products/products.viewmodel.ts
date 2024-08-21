import { useEffect } from 'react';
import { useCartViewModel } from '@cart/viewmodel/cart/cart.viewmodel';
import type { HttpError } from '@common/models/errors/http-error.model';
import { AxiosHttpService } from '@common/services/axios/axios.service';
import { useHttpViewModel } from '@common/viewmodel/http/http.viewmodel';
import type { Product } from '@products/model/product.model';
import type { ProductDto } from '@products/model/product-dto.model';
import { useZustandCartStore } from '@cart/store/cart/zustand-cart.store';

type ProductsViewModel = {
  products?: Product[];
  loading: boolean;
  error?: HttpError;
  getProducts: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  isInCart: (productId: string) => boolean;
};

function mapDtoToData(dto: ProductDto): Product {
  return {
    id: dto.id,
    name: dto.title,
    price: dto.price,
    image: dto.image,
  };
}

const axiosHttpService = new AxiosHttpService('https://fakestoreapi.com');

export function useProductsViewModel(): ProductsViewModel {
  const httpViewModel = useHttpViewModel<Product, ProductDto>(
    '/products',
    axiosHttpService,
    mapDtoToData,
  );
  const zustandCartStore = useZustandCartStore();
  const cartViewModel = useCartViewModel(zustandCartStore);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    httpViewModel.get();
  }

  function addToCart(product: Product) {
    cartViewModel.addProduct(product);
  }

  function removeFromCart(productId: string) {
    cartViewModel.removeProduct(productId);
  }

  function isInCart(productId: string): boolean {
    return cartViewModel.contains(productId);
  }

  return {
    products: httpViewModel.data,
    loading: httpViewModel.loading,
    error: httpViewModel.error,
    getProducts,
    addToCart,
    removeFromCart,
    isInCart,
  };
}
