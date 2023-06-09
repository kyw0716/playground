import styled from 'styled-components';
import { Layout } from '../components/layout/Layout';
import { useNavigate } from 'react-router-dom';
import { Margin } from '../components/layout/Margin';

export const Main = () => {
  const navigate = useNavigate();

  const goToErrorBoundaryPage = () => {
    navigate('/errorBoundary');
  };

  const goToSuspensePage = () => {
    navigate('/suspense');
  };

  const goToArrayMap = () => {
    navigate('/arrayMap');
  };

  const goToTodoList = () => {
    navigate('/todo');
  };

  return (
    <Layout title="메인 페이지">
      <Style.Container>
        <Style.RouteButton onClick={goToErrorBoundaryPage}>에러 바운더리 테스트</Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={goToSuspensePage}>서스펜스 테스트</Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={goToArrayMap}>key값 테스트</Style.RouteButton>
        <Margin direction={'row'} size={15} />
        <Style.RouteButton onClick={goToTodoList}>TODO 리스트</Style.RouteButton>
      </Style.Container>
    </Layout>
  );
};

const Style = {
  Container: styled.div`
    width: 100vw;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
  RouteButton: styled.button`
    padding: 15px;
  `,
};
