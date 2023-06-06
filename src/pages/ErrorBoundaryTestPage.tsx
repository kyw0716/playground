import { ErrorBoundary } from '../error/ErrorBoundary';
import { ProduceError } from '../errorBoundaryTest/ProduceError';
import { Layout } from '../layout/Layout';

export const ErrorBoundaryTestPage = () => {
  return (
    <Layout title="에러바운더리 테스트 페이지">
      <ErrorBoundary
        fallbackCallback={(error: Error | null) => alert(error?.message)}
      >
        <ProduceError />
      </ErrorBoundary>
    </Layout>
  );
};
