import type { HttpResponse } from '@common/models/http-response.model';

interface IHttpService {
  onCreate(): void;

  get<TReturn>(
    endpoint: string,
    params?: Record<string, string>,
  ): Promise<HttpResponse<TReturn>>;

  post<TReturn, TData>(
    endpoint: string,
    data: TData,
  ): Promise<HttpResponse<TReturn>>;

  remove<TReturn>(
    endpoint: string,
    params: Record<string, string>,
  ): Promise<HttpResponse<TReturn>>;
}

export abstract class HttpService implements IHttpService {
  private static instance?: HttpService;

  constructor(protected baseUrl: string) {
    if (!HttpService.instance) {
      this.onCreate();

      HttpService.instance = this;
    }

    return HttpService.instance;
  }

  abstract onCreate(): void;

  abstract get<TReturn>(
    endpoint: string,
    params?: Record<string, string>,
  ): Promise<HttpResponse<TReturn>>;

  abstract post<TReturn, TData>(
    endpoint: string,
    data: TData,
  ): Promise<HttpResponse<TReturn>>;

  abstract remove<TReturn>(
    endpoint: string,
    params: Record<string, string>,
  ): Promise<HttpResponse<TReturn>>;
}
