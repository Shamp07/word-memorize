import React from 'react';
import styled from '@emotion/styled';
import palette from '@constants/palette';

const Title = styled.h1`
  font-size: 34.5px;
  color: ${palette.typePrimary.toString()}
`;

function Word() {
  return (
    <div>
      <Title>단어장</Title>
    </div>
  );
}

export default Word;
