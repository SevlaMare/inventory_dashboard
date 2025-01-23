import { useEffect, useState } from 'react';
import { fetchRetry } from '@/helpers/fetch';

export function useData<T>(endpoint: string): {
  data: T[];
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        const responseData: T[] = await fetchRetry(endpoint);
        setData(responseData);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    callApi();
  }, [endpoint]);

  return { data, loading, error };
}
