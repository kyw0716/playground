import { useEffect, useState } from 'react';
import { useAsyncErrorBoundary } from './useAsyncErrorBoundary';
import { convertFetchResponseToJsonOrError } from '../utils/fetch/handleFetchResponse';

export const useFetch = <T>(url: string, arg?: RequestInit) => {
  const { throwErrorAtRenderTime } = useAsyncErrorBoundary();

  const [promise, setPromise] = useState<Promise<void>>();
  const [response, setResponse] = useState<T>();
  const [status, setStatus] = useState<'pending' | 'fulfilled' | 'rejected'>(
    'pending'
  );

  const resolvePromise = (response: T) => {
    setStatus('fulfilled');
    setResponse(response);
  };

  const rejectPromise = (error: Error) => {
    setStatus('rejected');
    throwErrorAtRenderTime(error);
  };

  useEffect(() => {
    setStatus('pending');
    setPromise(
      fetch(url, arg)
        .then(convertFetchResponseToJsonOrError<T>(throwErrorAtRenderTime))
        .then(resolvePromise, rejectPromise)
    );
  }, [arg]);

  if (status === 'pending' && promise) throw promise;

  return { response };
};
