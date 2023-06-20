import { ErrorBoundary } from '../components/error/ErrorBoundary';
import {
  ProduceErrorWhenClicked,
  ProduceErrorWhenRendered,
} from '../components/errorBoundary/ProduceError';
import { Layout } from '../components/layout/Layout';
import { FlexBox } from '../components/layout/FlexBox';
import { Margin } from '../components/layout/Margin';
import { ErrorFallback } from '../components/errorBoundary/ErrorFallback';

export const ErrorBoundaryTestPage = () => {
  return (
    <Layout title="에러바운더리 테스트 페이지">
      <FlexBox direction="column" alignItems={'center'}>
        <ErrorBoundary fallbackComponent={ErrorFallback}>
          <ProduceErrorWhenRendered />
        </ErrorBoundary>
        <Margin direction={'column'} size={20} />
        <FlexBox>
          <ErrorBoundary fallbackComponent={ErrorFallback}>
            <ProduceErrorWhenClicked />
          </ErrorBoundary>
        </FlexBox>
      </FlexBox>
    </Layout>
  );
};
