import styled from 'styled-components';

interface Props {
  title?: string;
}

export const Header = ({ title }: Props) => {
  return (
    <Style.Container>
      <Style.Title>{title ?? ''}</Style.Title>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    width: 100vw;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    background-color: white;
  `,
  Title: styled.h1`
    padding: 0;
    margin: 0;

    font-size: 25px;
    font-weight: bold;
  `,
};
