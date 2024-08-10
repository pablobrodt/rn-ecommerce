import { useState } from 'react';
import { HttpService } from '@common/services/http/http.service';
import { HttpError } from '@common/models/errors/http-error.model';

interface HttpViewModel<TData> {
  data?: TData[];
  loading: boolean;
  error?: HttpError;
  get: (params?: Record<string, string>) => Promise<void>;
}

export function useHttpViewModel<TData, TDto>(
  endpoint: string,
  httpService: HttpService,
  mapDtoToData: (dto: TDto) => TData,
): HttpViewModel<TData> {
  const [data, setData] = useState<TData[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<HttpError>();

  function startLoading() {
    setLoading(true);
  }

  function stopLoading() {
    setLoading(false);
  }

  function clearError() {
    setError(undefined);
  }

  async function get(params?: Record<string, string>) {
    try {
      clearError();
      startLoading();

      const response = await httpService.get<TDto | TDto[]>(endpoint, params);

      if (response.status !== 200) {
        throw new HttpError(response.statusText, response.status);
      }

      const mappedData = Array.isArray(response.data)
        ? response.data.map(mapDtoToData)
        : [mapDtoToData(response.data)];

      setData(mappedData);
    } catch (err) {
      if (err instanceof HttpError) {
        setError(err);
      }

      if (err instanceof Error) {
        throw err;
      }
    } finally {
      stopLoading();
    }
  }

  return {
    data,
    loading,
    error,
    get,
  };
}
