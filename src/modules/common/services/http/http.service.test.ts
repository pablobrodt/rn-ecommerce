/* eslint-disable no-new */
import { HttpService } from './http.service';

const fakeOnCreate = jest.fn();

class TestHttpService extends HttpService {
  onCreate(): void {
    fakeOnCreate();
  }

  get<TReturn>(
    _endpoint: string,
    _params: Record<string, string>,
  ): Promise<TReturn | TReturn[]> {
    return Promise.resolve({} as TReturn);
  }

  post<TReturn, TData>(_endpoint: string, _data: TData): Promise<TReturn> {
    return Promise.resolve({} as TReturn);
  }

  remove<TReturn>(
    _endpoint: string,
    _params: Record<string, string>,
  ): Promise<TReturn> {
    return Promise.resolve({} as TReturn);
  }
}

describe('Http Service Tests', () => {
  it('should run onCreate only when there is no instance created yet', () => {
    new TestHttpService('fake-base-url');
    new TestHttpService('another-fake-base-url');

    expect(fakeOnCreate).toHaveBeenCalledTimes(1);
  });
});
