import styled from 'styled-components';
import { Header } from './Header';
import { ReactNode } from 'react';

interface Props {
  title?: string;
  children: ReactNode;
}

export const Layout = ({ title, children }: Props) => {
  return (
    <Style.Container>
      <Header title={title} />
      {children}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    width: 100vw;
    min-height: 100vh;

    padding-top: 80px;
  `,
};
