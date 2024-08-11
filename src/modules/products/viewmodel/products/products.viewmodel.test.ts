import { renderHook, waitFor } from '@testing-library/react-native';
import { useProductsViewModel } from './products.viewmodel';
import { useHttpViewModel } from '@common/viewmodel/http/http.viewmodel';
import { useCartViewModel } from '@cart/viewmodel/cart/cart.viewmodel';
import { Product } from '@products/model/product.model';

jest.mock('@common/viewmodel/http/http.viewmodel');
jest.mock('@cart/viewmodel/cart/cart.viewmodel');

const useHttpViewModelMock = useHttpViewModel as jest.Mock;
const useCartViewModelMock = useCartViewModel as jest.Mock;

describe('Product View Model Tests', () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  it('should get products on hook mount', () => {
    const mockGet = jest.fn();
    const mockHttpViewModel = {
      get: mockGet,
      data: [],
      loading: false,
      error: null,
    };

    useHttpViewModelMock.mockReturnValue(mockHttpViewModel);

    renderHook(() => useProductsViewModel());

    expect(mockGet).toHaveBeenCalledTimes(1);
  });

  it('should get products on demand', async () => {
    const mockGet = jest.fn();
    const mockHttpViewModel = {
      get: mockGet,
      data: [],
      loading: false,
      error: null,
    };

    useHttpViewModelMock.mockReturnValue(mockHttpViewModel);

    const { result } = renderHook(() => useProductsViewModel());

    await waitFor(async () => result.current.getProducts());

    expect(mockGet).toHaveBeenCalledTimes(2);
  });

  it('should get products from /products endpoint', () => {
    const mockGet = jest.fn();
    const mockHttpViewModel = {
      get: mockGet,
      data: [],
      loading: false,
      error: null,
    };

    useHttpViewModelMock.mockReturnValue(mockHttpViewModel);

    renderHook(() => useProductsViewModel());

    const calledWithProductsEndpoint = useHttpViewModelMock.mock.calls.every(
      ([firstParam]) => firstParam === '/products',
    );

    expect(calledWithProductsEndpoint).toBe(true);
  });

  it('should call cart view model addProduct', () => {
    const fakeProduct: Product = {
      id: '171',
      name: 'fake product',
      image: 'fake-image-url',
      price: 17.1,
    };
    const addProductMock = jest.fn();
    useCartViewModelMock.mockReturnValueOnce({
      products: [],
      productCount: 0,
      addProduct: addProductMock,
      removeProduct: jest.fn(),
    });

    const { result } = renderHook(() => useProductsViewModel());

    result.current.addToCart(fakeProduct);

    expect(addProductMock).toHaveBeenCalledTimes(1);
    expect(addProductMock).toHaveBeenCalledWith(fakeProduct);
  });

  it('should call cart view model removeProduct', () => {
    const fakeProductId: string = '171';
    const removeProductMock = jest.fn();
    useCartViewModelMock.mockReturnValueOnce({
      products: [],
      productCount: 0,
      addProduct: jest.fn(),
      removeProduct: removeProductMock,
    });

    const { result } = renderHook(() => useProductsViewModel());

    result.current.removeFromCart(fakeProductId);

    expect(removeProductMock).toHaveBeenCalledTimes(1);
    expect(removeProductMock).toHaveBeenCalledWith(fakeProductId);
  });
});
