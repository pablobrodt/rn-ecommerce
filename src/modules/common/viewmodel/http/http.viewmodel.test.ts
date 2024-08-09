import { renderHook, waitFor } from '@testing-library/react-native';
import {
  HttpServiceMock,
  fakeGet,
} from '@common/services/http/mock/http.service.mock';
import type { HttpService } from '@common/services/http/http.service';
import { useHttpViewModel } from './http.viewmodel';
import { HttpResponse } from '@common/models/http-response.model';

type TestData = { title: string };
type TestDto = { test: string };

function fakeMapDtoToData(dto: TestDto): TestData {
  return { title: dto.test };
}

const multipleItems = [{ test: 'one' }, { test: 'two' }];

describe('Http ViewModel Tests', () => {
  const fakeBaseUrl = '/fake';
  let httpServiceMock: HttpService;

  const successFullResponseWithMultipleItems = new HttpResponse(
    multipleItems,
    200,
    'Ok',
  );

  beforeEach(() => {
    jest.clearAllMocks();

    httpServiceMock = new HttpServiceMock(fakeBaseUrl);
  });

  it('should make get with no params', async () => {
    const endpoint = '/fake';
    fakeGet.mockResolvedValueOnce(successFullResponseWithMultipleItems);

    const { result } = renderHook(() =>
      useHttpViewModel(endpoint, httpServiceMock, fakeMapDtoToData),
    );

    await waitFor(() => result.current.get());

    expect(fakeGet).toHaveBeenCalledWith(endpoint, undefined);
  });

  it('should make get with params', async () => {
    const params = { fake: 'fake param' };
    const endpoint = '/fake';
    fakeGet.mockResolvedValueOnce(successFullResponseWithMultipleItems);

    const { result } = renderHook(() =>
      useHttpViewModel(endpoint, httpServiceMock, fakeMapDtoToData),
    );

    await waitFor(() => result.current.get(params));

    expect(fakeGet).toHaveBeenCalledWith(endpoint, params);
  });

  it('should make get with resulting array from service', async () => {
    const expectedData: TestData[] = [{ title: 'one' }, { title: 'two' }];
    const endpoint = '/fake';
    fakeGet.mockResolvedValueOnce(successFullResponseWithMultipleItems);

    const { result } = renderHook(() =>
      useHttpViewModel(endpoint, httpServiceMock, fakeMapDtoToData),
    );

    await waitFor(() => result.current.get());

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(expectedData);
  });

  it('should make get with resulting single value from service', async () => {
    const expectedData: TestData[] = [{ title: 'one' }];
    const endpoint = '/fake';
    fakeGet.mockResolvedValueOnce(new HttpResponse({ test: 'one' }, 200, 'Ok'));

    const { result } = renderHook(() =>
      useHttpViewModel(endpoint, httpServiceMock, fakeMapDtoToData),
    );

    await waitFor(() => result.current.get());

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(expectedData);
  });

  it('should set error when HttpError is thrown', async () => {
    const expectedStatus = 502;
    const expectedError = 'Fake Error';
    const endpoint = '/fake';
    fakeGet.mockResolvedValueOnce(
      new HttpResponse({ test: 'one' }, expectedStatus, expectedError),
    );

    const { result } = renderHook(() =>
      useHttpViewModel(endpoint, httpServiceMock, fakeMapDtoToData),
    );

    await waitFor(() => result.current.get());

    expect(result.current.error?.message).toEqual(expectedError);
    expect(result.current.error?.status).toEqual(expectedStatus);
  });

  it('should throw error if Error is thrown', async () => {
    const endpoint = '/fake';
    fakeGet.mockResolvedValue(null);

    const { result } = renderHook(() =>
      useHttpViewModel(endpoint, httpServiceMock, fakeMapDtoToData),
    );

    await waitFor(() => expect(result.current.get()).rejects.toThrow());
  });
});
