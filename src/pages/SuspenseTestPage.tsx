import { Suspense, useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { ErrorBoundary } from '../components/error/ErrorBoundary';
import { ErrorFallback } from '../components/errorBoundary/ErrorFallback';
import { ShowApiResponse } from '../components/suspense/ShowApiResponse';
import { FlexBox } from '../components/layout/FlexBox';
import { SuspenseFallbackTest } from '../components/suspense/SuspenseFallbackTest';

export const SuspenseTestPage = () => {
  return (
    <Layout title="서스펜스 테스트 페이지">
      <ErrorBoundary fallbackComponent={ErrorFallback}>
        <FlexBox direction={'column'}>
          <Suspense fallback={<div>Loading...</div>}>
            <ShowApiResponse />
          </Suspense>
          <Suspense fallback={<div>Loading2...</div>}>
            <SuspenseFallbackTest />
          </Suspense>
        </FlexBox>
      </ErrorBoundary>
    </Layout>
  );
};
