import { renderHook, waitFor } from '@testing-library/react-native';
import { useProductsViewModel } from './products.viewmodel';
import { useHttpViewModel } from '@common/viewmodel/http/http.viewmodel';

jest.mock('@common/viewmodel/http/http.viewmodel');

const useHttpViewModelMock = useHttpViewModel as jest.Mock;

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
});
