import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly text: string;
}

const Title = ({ text }: Props) => (
  <TitleWrapper>
    <h1>{text}</h1>
  </TitleWrapper>
);

const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

export default Title;
