import styled from 'styled-components';

type ContentAlign =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'center'
  | 'flex-start'
  | 'flex-end';

interface FlexBoxProps {
  width?: number;
  height?: number;

  direction?: 'row' | 'column';
  justifyContent?: ContentAlign;
  alignItems?: ContentAlign;

  padding?: string;
}

export const FlexBox = styled.div<FlexBoxProps>`
  width: ${(props) => `${props.width}px` ?? ''};
  height: ${(props) => `${props.height}px` ?? ''};

  display: flex;
  flex-direction: ${(props) => props.direction ?? 'row'};
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
  align-items: ${(props) => props.alignItems ?? 'flex-start'};

  padding: ${(props) => props.padding ?? '0'};
`;
