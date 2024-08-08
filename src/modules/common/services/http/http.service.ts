export abstract class HttpService {
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
    params: Record<string, string>,
  ): Promise<TReturn | TReturn[]>;

  abstract post<TReturn, TData>(
    endpoint: string,
    data: TData,
  ): Promise<TReturn>;

  abstract remove<TReturn>(
    endpoint: string,
    params: Record<string, string>,
  ): Promise<TReturn>;
}
