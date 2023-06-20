import styled from 'styled-components';
import { Layout } from '../layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Main = () => {
  const navigate = useNavigate();

  const goToErrorBoundaryPage = () => {
    navigate('/errorBoundary');
  };

  const goToSuspensePage = () => {
    navigate('/suspense');
  };

  useEffect(() => {
    fetch('/api/suspense')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Layout title="메인 페이지">
      <Style.Container>
        <Style.RouteButton onClick={goToErrorBoundaryPage}>
          에러 바운더리 테스트
        </Style.RouteButton>
        <Style.RouteButton onClick={goToSuspensePage}>
          서스펜스 테스트
        </Style.RouteButton>
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
