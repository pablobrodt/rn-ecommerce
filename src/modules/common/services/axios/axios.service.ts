import axios, { type AxiosResponse, type AxiosInstance } from 'axios';
import { HttpResponse } from '@common/models/http-response.model';
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
    params?: Record<string, string>,
  ): Promise<HttpResponse<TReturn>> {
    const response: AxiosResponse<TReturn> = await this.http.get<TReturn>(
      endpoint,
      {
        params,
      },
    );

    return new HttpResponse<TReturn>(
      response.data,
      response.status,
      response.statusText,
    );
  }

  async post<TReturn, TData>(
    endpoint: string,
    data: TData,
  ): Promise<HttpResponse<TReturn>> {
    const response: AxiosResponse<TReturn, TData> = await this.http.post(
      endpoint,
      { data },
    );

    return new HttpResponse<TReturn>(
      response.data,
      response.status,
      response.statusText,
    );
  }

  async remove<TReturn>(
    endpoint: string,
    params: Record<string, string>,
  ): Promise<HttpResponse<TReturn>> {
    const response: AxiosResponse<TReturn> = await this.http.delete(endpoint, {
      params,
    });

    return new HttpResponse<TReturn>(
      response.data,
      response.status,
      response.statusText,
    );
  }
}
