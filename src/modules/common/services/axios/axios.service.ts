import axios, { type AxiosResponse, type AxiosInstance } from 'axios';
import { HttpService } from '../http/http.service';

export class AxiosHttpService extends HttpService {
  private http!: AxiosInstance;

  onCreate(): void {
    this.http = axios.create({
      baseURL: this.baseUrl,
      timeout: 3000,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async get<TReturn>(
    endpoint: string,
    params: Record<string, string>,
  ): Promise<TReturn | TReturn[]> {
    const response: AxiosResponse<TReturn> = await this.http.get<TReturn>(
      endpoint,
      {
        params,
      },
    );

    return response.data;
  }

  async post<TReturn, TData>(endpoint: string, data: TData): Promise<TReturn> {
    const response: AxiosResponse<TReturn, TData> = await this.http.post(
      endpoint,
      { data },
    );

    return response.data;
  }

  async remove<TReturn>(
    endpoint: string,
    params: Record<string, string>,
  ): Promise<TReturn> {
    const response: AxiosResponse<TReturn> = await this.http.delete(endpoint, {
      params,
    });

    return response.data;
  }
}
