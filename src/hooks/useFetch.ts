import { useEffect, useState } from 'react';
import { useAsyncErrorBoundary } from './useAsyncErrorBoundary';

export const useFetch = <I, T>(dispatch: (arg: I) => Promise<T>, arg: I) => {
  const [promise, setPromise] = useState<Promise<void>>();
  const [response, setResponse] = useState<T>();
  const [status, setStatus] = useState<'pending' | 'fulfilled' | 'rejected'>(
    'pending'
  );
  const { setAsyncErrorToThrow } = useAsyncErrorBoundary();

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
      dispatch(arg)
        .then(resolvePromise, rejectPromise)
        .catch((error) => rejectPromise(error))
    );
  }, [arg]);

  if (status === 'pending' && promise) throw promise;
  return response;
};
