import { ErrorBoundary } from '../error/ErrorBoundary';
import {
  ProduceErrorWhenClicked,
  ProduceErrorWhenRendered,
} from '../errorBoundary/ProduceError';
import { Layout } from '../layout/Layout';
import { FlexBox } from '../layout/FlexBox';
import { Margin } from '../layout/Margin';
import { ErrorFallback } from '../errorBoundary/ErrorFallback';

export const ErrorBoundaryTestPage = () => {
  return (
    <Layout title="에러바운더리 테스트 페이지">
      <FlexBox direction="column" alignItems={'center'}>
        <ErrorBoundary
          fallbackComponent={ErrorFallback}
          fallbackCallback={(error?: Error) => alert(error?.message)}
        >
          <ProduceErrorWhenRendered />
        </ErrorBoundary>
        <Margin direction={'column'} size={20} />
        <FlexBox>
          <ErrorBoundary
            fallbackComponent={ErrorFallback}
            fallbackCallback={() => window.location.reload()}
          >
            <ProduceErrorWhenClicked />
          </ErrorBoundary>
        </FlexBox>
      </FlexBox>
    </Layout>
  );
};
