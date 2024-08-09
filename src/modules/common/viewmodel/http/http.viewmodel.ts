import { useState } from 'react';
import { HttpService } from '@common/services/http/http.service';

interface HttpViewModel<TData> {
  data?: TData[];
  loading: boolean;
  get: (params?: Record<string, string>) => Promise<void>;
}

export function useHttpViewModel<TData, TDto>(
  endpoint: string,
  httpService: HttpService,
  mapDtoToData: (dto: TDto) => TData,
): HttpViewModel<TData> {
  const [data, setData] = useState<TData[]>();
  const [loading, setLoading] = useState<boolean>(false);

  function startLoading() {
    setLoading(true);
  }

  function stopLoading() {
    setLoading(false);
  }

  async function get(params?: Record<string, string>) {
    try {
      startLoading();

      const response = await httpService.get<TDto | TDto[]>(endpoint, params);

      const mappedData = Array.isArray(response)
        ? response.map(mapDtoToData)
        : [mapDtoToData(response)];

      setData(mappedData);
    } catch (error) {
      console.error(error);

      throw error;
    } finally {
      stopLoading();
    }
  }

  return {
    data,
    loading,
    get,
  };
}
