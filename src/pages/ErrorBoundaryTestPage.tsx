import styled from 'styled-components';
import { ErrorBoundary } from '../error/ErrorBoundary';
import {
  ProduceErrorWhenClicked,
  ProduceErrorWhenRendered,
} from '../errorBoundary/ProduceError';
import { Layout } from '../layout/Layout';
import { FlexBox } from '../layout/FlexBox';
import { Margin } from '../layout/Margin';

export const ErrorBoundaryTestPage = () => {
  return (
    <Layout title="에러바운더리 테스트 페이지">
      <FlexBox direction="column" alignItems={'center'}>
        <ErrorBoundary
          fallbackComponent={<div>시작하자마자 발생한 에러 잡음</div>}
        >
          <ProduceErrorWhenRendered />
        </ErrorBoundary>
        <Margin direction={'column'} size={20} />
        <FlexBox>
          <ErrorBoundary
            fallbackComponent={<div>클릭했을 때 발생한 에러 잡음</div>}
          >
            <ProduceErrorWhenClicked />
          </ErrorBoundary>
        </FlexBox>
      </FlexBox>
    </Layout>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
