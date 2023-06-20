import styled from 'styled-components';

interface MarginProps {
  direction: 'row' | 'column';
  size: number;
}

export const Margin = styled.div<MarginProps>`
  margin-right: ${(props) =>
    props.direction === 'row' ? `${props.size}px` : ''};
  margin-top: ${(props) =>
    props.direction === 'column' ? `${props.size}px` : ''};
`;
