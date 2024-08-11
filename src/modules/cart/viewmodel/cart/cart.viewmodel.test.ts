import { CartProduct } from '@cart/model/cart-product.model';
import { useCartStore } from '@cart/store/cart/cart.store';
import { Product } from '@products/model/product.model';
import { renderHook } from '@testing-library/react-native';
import { useCartViewModel } from './cart.viewmodel';

jest.mock('@cart/store/cart/cart.store');

const useCartStoreMock = useCartStore as jest.Mock;

describe('Cart View Model Tests', () => {
  const fakeProduct: Product = {
    id: '171',
    image: 'fake-image-url',
    name: 'fake product',
    price: 17.1,
  };

  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should add a new cart product', () => {
    const expectedProducts: CartProduct[] = [{ ...fakeProduct, quantity: 1 }];
    const setProductsMock = jest.fn();
    useCartStoreMock.mockReturnValueOnce({
      products: [],
      productCount: 0,
      setProducts: setProductsMock,
    });

    const { result } = renderHook(() => useCartViewModel());

    result.current.addProduct(fakeProduct);

    expect(setProductsMock).toHaveBeenCalledTimes(1);
    expect(setProductsMock).toHaveBeenCalledWith(expectedProducts);
  });

  it('should increment an existing product quantity', () => {
    const anotherFakeProduct = {
      ...fakeProduct,
      id: '00',
      name: 'another fake product',
      quantity: 1,
    };
    const expectedProducts: CartProduct[] = [
      { ...fakeProduct, quantity: 2 },
      anotherFakeProduct,
    ];
    const setProductsMock = jest.fn();
    useCartStoreMock.mockReturnValueOnce({
      products: [{ ...fakeProduct, quantity: 1 }, anotherFakeProduct],
      productCount: 1,
      setProducts: setProductsMock,
    });

    const { result } = renderHook(() => useCartViewModel());

    result.current.addProduct(fakeProduct);

    expect(setProductsMock).toHaveBeenCalledTimes(1);
    expect(setProductsMock).toHaveBeenCalledWith(expectedProducts);
  });

  it('should remove product', () => {
    const setProductsMock = jest.fn();
    useCartStoreMock.mockReturnValueOnce({
      products: [{ ...fakeProduct, quantity: 1 }],
      productCount: 1,
      setProducts: setProductsMock,
    });

    const { result } = renderHook(() => useCartViewModel());

    result.current.removeProduct(fakeProduct.id);

    expect(setProductsMock).toHaveBeenCalledTimes(1);
    expect(setProductsMock).toHaveBeenCalledWith([]);
  });
});
