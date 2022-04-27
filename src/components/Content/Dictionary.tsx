import React from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

const Root = styled.div``;

const Title = styled.div`
  display: block;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 24px;
`;

const Content = styled.div`
  display: flex;
`;

const Input = styled(TextField)`
  & + & {
    margin-left: 24px;
  }
`;

const PlusIcon = styled.i`
  margin-left: 24px;
  font-size: 30px;
  line-height: 60px;
  
  &:hover {
    
  }
`;

function Dictionary() {
  return (
    <Root>
      <Title>단어 입력하기</Title>
      <Content>
        <Input label="단어를 입력하세요." variant="standard" />
        <Input label="단어의 뜻을 입력하세요.." variant="standard" />
        <PlusIcon className="ri-add-circle-line" />
      </Content>
    </Root>
  );
}

export default Dictionary;
