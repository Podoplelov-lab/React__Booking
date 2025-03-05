import { useState, useEffect } from 'react';

export default function useFetch<T>(fn: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fn()
      .then((response: any) => {
        return response.json()
      })
      .then(({data}) => {
        setData(data);
      })
      .catch((error: Error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
    error,
  };
}
