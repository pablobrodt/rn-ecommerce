import axios, { AxiosInstance } from 'axios';
import { AxiosHttpService } from './axios.service';

jest.mock('axios');

const axiosInstanceMock = {
  get: jest.fn(),
  post: jest.fn(),
  delete: jest.fn(),
} as unknown as jest.Mocked<AxiosInstance>;

const axiosCreateMock = axios.create as jest.MockedFunction<
  typeof axios.create
>;

describe('Axios Service Tests', () => {
  const fakeBaseUrl = '/fake-url';
  const fakeResponseData = 'fake data';
  let axiosService: AxiosHttpService;

  beforeEach(() => {
    jest.clearAllMocks();

    axiosCreateMock.mockReturnValue(axiosInstanceMock);

    axiosService = new AxiosHttpService(fakeBaseUrl);
  });

  it('should create axios instance on instantiation', () => {
    expect(axiosCreateMock).toHaveBeenCalledWith({
      baseURL: fakeBaseUrl,
      timeout: 3000,
      headers: { 'Content-Type': 'application/json' },
    });
  });

  it('should make get with endpoint, no params and also should return response data', async () => {
    const expectedEndpoint = '/fake';
    const expectedParams = { params: undefined };
    const expectedResponseData = fakeResponseData;
    axiosInstanceMock.get.mockResolvedValueOnce({
      data: fakeResponseData,
      status: 200,
      statusText: 'Ok',
    });

    const result = await axiosService.get<string>(expectedEndpoint);

    expect(result.data).toEqual(expectedResponseData);
    expect(axiosInstanceMock.get).toHaveBeenCalledWith(
      expectedEndpoint,
      expectedParams,
    );
  });

  it('should make get with endpoint and params, also should return response data', async () => {
    const fakeParams = { fakeParam: 'fake' };
    const expectedEndpoint = '/fake';
    const expectedParams = { params: fakeParams };
    const expectedResponseData = fakeResponseData;
    axiosInstanceMock.get.mockResolvedValueOnce({
      data: fakeResponseData,
      status: 200,
      statusText: 'Ok',
    });

    const result = await axiosService.get<string>(expectedEndpoint, fakeParams);

    expect(result.data).toEqual(expectedResponseData);
    expect(axiosInstanceMock.get).toHaveBeenCalledWith(
      expectedEndpoint,
      expectedParams,
    );
  });

  it('should make post with endpoint and data, also should return response data', async () => {
    const fakeData = { title: 'fake' };
    const expectedEndpoint = '/fake';
    const expectedData = { data: fakeData };
    const expectedResponseData = fakeResponseData;
    axiosInstanceMock.post.mockResolvedValueOnce({
      data: fakeResponseData,
      status: 200,
      statusText: 'Ok',
    });

    const result = await axiosService.post<string, { title: string }>(
      expectedEndpoint,
      fakeData,
    );

    expect(result.data).toEqual(expectedResponseData);
    expect(axiosInstanceMock.post).toHaveBeenCalledWith(
      expectedEndpoint,
      expectedData,
    );
  });

  it('should make remove with endpoint and params, also should return response data', async () => {
    const fakeParams = { fakeParam: 'fake' };
    const expectedEndpoint = '/fake';
    const expectedParams = { params: fakeParams };
    const expectedResponseData = fakeResponseData;
    axiosInstanceMock.delete.mockResolvedValueOnce({
      data: fakeResponseData,
      status: 200,
      statusText: 'Ok',
    });

    const result = await axiosService.remove<string>(
      expectedEndpoint,
      fakeParams,
    );

    expect(result.data).toEqual(expectedResponseData);
    expect(axiosInstanceMock.delete).toHaveBeenCalledWith(
      expectedEndpoint,
      expectedParams,
    );
  });
});
