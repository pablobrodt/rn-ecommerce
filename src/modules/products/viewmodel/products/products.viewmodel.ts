import { HttpError } from '@common/models/errors/http-error.model';
import { AxiosHttpService } from '@common/services/axios/axios.service';
import { useHttpViewModel } from '@common/viewmodel/http/http.viewmodel';
import { Product } from '@products/model/product.model';
import { ProductDto } from '@products/model/product-dto.model';
import { useEffect } from 'react';

type ProductsViewModel = {
  products?: Product[];
  loading: boolean;
  error?: HttpError;
  getProducts: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
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

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    httpViewModel.get();
  }

  function addToCart(product: Product) {
    // TODO Adicionar logica para adicionar ao carrinho
    // possivelmente utilizando um recurso do futuro modulo cart
    console.log('@@@ addToCart', product);
  }

  function removeFromCart(productId: string) {
    // TODO Adicionar logica para remover do carrinho
    // possivelmente utilizando um recurso do futuro modulo cart
    console.log('@@@ removeFromCart', productId);
  }

  return {
    products: httpViewModel.data,
    loading: httpViewModel.loading,
    error: httpViewModel.error,
    getProducts,
    addToCart,
    removeFromCart,
  };
}
