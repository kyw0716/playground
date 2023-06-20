import { useEffect, useState } from 'react';
import { useAsyncErrorBoundary } from './useAsyncErrorBoundary';

export const useFetch = <T>(url: string, arg?: RequestInit) => {
  const { setAsyncErrorToThrow } = useAsyncErrorBoundary();

  const [promise, setPromise] = useState<Promise<void>>();
  const [response, setResponse] = useState<T>();
  const [status, setStatus] = useState<'pending' | 'fulfilled' | 'rejected'>(
    'pending'
  );

  const handleResponse = async (response: Response): Promise<T> => {
    if (!response.ok) {
      const errorMessage = await response.json();
      const error = new Error(errorMessage);

      setAsyncErrorToThrow(error);
      throw error;
    }

    return response.json();
  };

  const resolvePromise = (response: T) => {
    setStatus('fulfilled');
    setResponse(response);
  };

  const rejectPromise = (error: Error) => {
    setStatus('rejected');
    setAsyncErrorToThrow(error);
  };

  useEffect(() => {
    setStatus('pending');
    setPromise(
      fetch(url, arg).then(handleResponse).then(resolvePromise, rejectPromise)
    );
  }, [arg]);

  if (status === 'pending' && promise) throw promise;

  return { response };
};
