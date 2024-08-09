import { HttpService } from '../http.service';

export const fakeOnCreate = jest.fn();
export const fakeGet = jest.fn();
export const fakePost = jest.fn();
export const fakeRemove = jest.fn();

export class HttpServiceMock extends HttpService {
  onCreate(): void {
    fakeOnCreate();
  }

  get<TReturn>(
    endpoint: string,
    params?: Record<string, string>,
  ): Promise<TReturn> {
    return fakeGet(endpoint, params);
  }

  post<TReturn, TData>(endpoint: string, data: TData): Promise<TReturn> {
    return fakePost(endpoint, data);
  }

  remove<TReturn>(
    endpoint: string,
    params: Record<string, string>,
  ): Promise<TReturn> {
    return fakeRemove(endpoint, params);
  }
}
