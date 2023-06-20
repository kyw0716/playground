import { Suspense, useState } from 'react';
import { Layout } from '../layout/Layout';
import { ErrorBoundary } from '../error/ErrorBoundary';
import { ErrorFallback } from '../errorBoundary/ErrorFallback';
import { ShowApiResponse } from '../suspense/ShowApiResponse';
import { FlexBox } from '../layout/FlexBox';

// Suspense 내부에서 Promise 객체가 throw 되면 fallback이 트리거 된다.
const Test = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  if (isButtonClicked) throw new Promise((resolve) => resolve(''));

  return (
    <button onClick={() => setIsButtonClicked(true)}>
      누르면 Promise 객체 반환
    </button>
  );
};

export const SuspenseTestPage = () => {
  return (
    <Layout title="서스펜스 테스트 페이지">
      <ErrorBoundary fallbackComponent={ErrorFallback}>
        <FlexBox direction={'column'}>
          <Suspense fallback={<div>Loading...</div>}>
            <ShowApiResponse />
          </Suspense>
          <Suspense fallback={<div>Loading2...</div>}>
            <Test />
          </Suspense>
        </FlexBox>
      </ErrorBoundary>
    </Layout>
  );
};
