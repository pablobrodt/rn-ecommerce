import { renderHook, waitFor } from '@testing-library/react-native';
import {
  HttpServiceMock,
  fakeGet,
} from '@common/services/http/mock/http.service.mock';
import type { HttpService } from '@common/services/http/http.service';
import { useHttpViewModel } from './http.viewmodel';

type TestData = { title: string };
type TestDto = { test: string };

function fakeMapDtoToData(dto: TestDto): TestData {
  return { title: dto.test };
}

describe('Http ViewModel Tests', () => {
  const fakeBaseUrl = '/fake';
  let httpServiceMock: HttpService;

  beforeEach(() => {
    jest.clearAllMocks();

    httpServiceMock = new HttpServiceMock(fakeBaseUrl);
  });

  it('should make get with no params', async () => {
    const endpoint = '/fake';
    const { result } = renderHook(() =>
      useHttpViewModel(endpoint, httpServiceMock, fakeMapDtoToData),
    );
    fakeGet.mockResolvedValueOnce([{ test: 'one' }, { test: 'two' }]);

    await waitFor(() => result.current.get());

    expect(fakeGet).toHaveBeenCalledWith(endpoint, undefined);
  });

  it('should make get with params', async () => {
    const params = { fake: 'fake param' };
    const endpoint = '/fake';
    const { result } = renderHook(() =>
      useHttpViewModel(endpoint, httpServiceMock, fakeMapDtoToData),
    );
    fakeGet.mockResolvedValueOnce([{ test: 'one' }, { test: 'two' }]);

    await waitFor(() => result.current.get(params));

    expect(fakeGet).toHaveBeenCalledWith(endpoint, params);
  });

  it('should make get with resulting array from service', async () => {
    const expectedData: TestData[] = [{ title: 'one' }, { title: 'two' }];
    const endpoint = '/fake';
    const { result } = renderHook(() =>
      useHttpViewModel(endpoint, httpServiceMock, fakeMapDtoToData),
    );
    fakeGet.mockResolvedValueOnce([{ test: 'one' }, { test: 'two' }]);

    await waitFor(() => result.current.get());

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(expectedData);
  });

  it('should make get with resulting single value from service', async () => {
    const expectedData: TestData[] = [{ title: 'one' }];
    const endpoint = '/fake';
    const { result } = renderHook(() =>
      useHttpViewModel(endpoint, httpServiceMock, fakeMapDtoToData),
    );
    fakeGet.mockResolvedValueOnce({ test: 'one' });

    await waitFor(() => result.current.get());

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(expectedData);
  });

  // TODO pablo.brodt 09/08/24
  // criar testes para catch dentro da viewmodel
});
