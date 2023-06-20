import { Suspense, memo, useMemo } from 'react';
import { Layout } from '../layout/Layout';
import { useFetch } from '../hooks/useFetch';
import { ErrorBoundary } from '../error/ErrorBoundary';
import { ErrorFallback } from '../errorBoundary/ErrorFallback';
import { useAsyncErrorBoundary } from '../hooks/useAsyncErrorBoundary';

interface Arg {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  body?: BodyInit;
}

const ShowApiResponse = () => {
  const { setAsyncErrorToThrow } = useAsyncErrorBoundary();

  const fetchString = async (arg: Arg): Promise<string> => {
    const response = await fetch('/api/suspense', arg).catch((error) => {
      setAsyncErrorToThrow(error);
      throw new Error(error);
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      const error = new Error(errorMessage);

      setAsyncErrorToThrow(error);
      throw error;
    }

    return response.json();
  };
  const arg = useMemo<Arg>(() => ({ method: 'GET' }), []);
  const response = useFetch<Arg, string>(fetchString, arg);

  return <>서버 반환값: {response}</>;
};

export const SuspenseTestPage = memo(() => {
  return (
    <Layout title="서스펜스 테스트 페이지">
      <ErrorBoundary fallbackComponent={ErrorFallback}>
        <Suspense fallback={<>Loading...</>}>
          <ShowApiResponse />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
});
