import { useEffect, useState } from 'react';

export const useRetry = <T>(
  queryFn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [attempt, setAttempt] = useState<number>(0);

  const fetchData = async () => {
    try {
      const result = await queryFn();
      setData(result);
      setError(null);
    } catch (err) {
      if (attempt < retries) {
        setTimeout(() => {
          setAttempt(attempt + 1);
          fetchData();
        }, delay);
      } else {
        setError(err as Error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [attempt]);

  return { data, error };
};
