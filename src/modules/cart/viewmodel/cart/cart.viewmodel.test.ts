import { CartProduct } from '@cart/model/cart-product.model';
import { renderHook } from '@testing-library/react-native';
import { useCartViewModel } from './cart.viewmodel';
import { CartStore } from '@cart/store/cart/cart.store';

describe('Cart View Model Tests', () => {
  const fakeProduct: CartProduct = {
    id: '171',
    image: 'fake-image-url',
    name: 'fake product',
    price: 17.1,
    quantity: 1,
  };

  const anotherFakeProduct: CartProduct = {
    ...fakeProduct,
    id: '00',
    name: 'another fake product',
  };

  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should add a new cart product', () => {
    const expectedProducts: CartProduct[] = [fakeProduct];
    const setProductsMock = jest.fn();
    const fakeStore: CartStore = {
      products: [],
      productCount: 0,
      setProducts: setProductsMock,
    };

    const { result } = renderHook(() => useCartViewModel(fakeStore));

    result.current.addProduct(fakeProduct);

    expect(setProductsMock).toHaveBeenCalledTimes(1);
    expect(setProductsMock).toHaveBeenCalledWith(expectedProducts);
  });

  it('should increase an existing product quantity', () => {
    const expectedProducts: CartProduct[] = [
      { ...fakeProduct, quantity: 2 },
      anotherFakeProduct,
    ];
    const setProductsMock = jest.fn();
    const fakeStore: CartStore = {
      products: [fakeProduct, anotherFakeProduct],
      productCount: 2,
      setProducts: setProductsMock,
    };

    const { result } = renderHook(() => useCartViewModel(fakeStore));

    result.current.increaseProduct(fakeProduct.id);

    expect(setProductsMock).toHaveBeenCalledTimes(1);
    expect(setProductsMock).toHaveBeenCalledWith(expectedProducts);
  });

  it('should decrease an existing product quantity', () => {
    const expectedProducts: CartProduct[] = [fakeProduct, anotherFakeProduct];
    const setProductsMock = jest.fn();
    const fakeStore: CartStore = {
      products: [{ ...fakeProduct, quantity: 2 }, anotherFakeProduct],
      productCount: 2,
      setProducts: setProductsMock,
    };

    const { result } = renderHook(() => useCartViewModel(fakeStore));

    result.current.decreaseProduct(fakeProduct.id);

    expect(setProductsMock).toHaveBeenCalledTimes(1);
    expect(setProductsMock).toHaveBeenCalledWith(expectedProducts);
  });

  it('should remove product when decreasing from a quantity of 1', () => {
    const expectedProducts: CartProduct[] = [anotherFakeProduct];
    const setProductsMock = jest.fn();
    const fakeStore: CartStore = {
      products: [fakeProduct, anotherFakeProduct],
      productCount: 2,
      setProducts: setProductsMock,
    };

    const { result } = renderHook(() => useCartViewModel(fakeStore));

    result.current.decreaseProduct(fakeProduct.id);

    expect(setProductsMock).toHaveBeenCalledTimes(1);
    expect(setProductsMock).toHaveBeenCalledWith(expectedProducts);
  });

  it('should remove product', () => {
    const setProductsMock = jest.fn();
    const fakeStore: CartStore = {
      products: [fakeProduct],
      productCount: 1,
      setProducts: setProductsMock,
    };

    const { result } = renderHook(() => useCartViewModel(fakeStore));

    result.current.removeProduct(fakeProduct.id);

    expect(setProductsMock).toHaveBeenCalledTimes(1);
    expect(setProductsMock).toHaveBeenCalledWith([]);
  });

  it('should return true if cart contains product 171', () => {
    const fakeStore: CartStore = {
      products: [fakeProduct],
      productCount: 1,
      setProducts: jest.fn(),
    };

    const { result } = renderHook(() => useCartViewModel(fakeStore));

    const hasProduct = result.current.contains('171');

    expect(hasProduct).toBe(true);
  });

  it('should return false if cart dont contains product 171', () => {
    const fakeStore: CartStore = {
      products: [anotherFakeProduct],
      productCount: 1,
      setProducts: jest.fn(),
    };
    const { result } = renderHook(() => useCartViewModel(fakeStore));

    const hasProduct = result.current.contains('171');

    expect(hasProduct).toBe(false);
  });
});
