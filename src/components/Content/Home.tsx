import React from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    margin-left: 20px;
  }
`;

const Submitbutton = styled(Button)`
  margin-left: 20px;
`;

function Home() {
  return (
    <Root>
      <Title>단어 입력하기</Title>
      <Content>
        <Input label="단어를 입력하세요." variant="standard" />
        <Input label="단어의 뜻을 입력하세요.." variant="standard" />
        <Submitbutton variant="contained">추가</Submitbutton>
      </Content>
    </Root>
  );
}

export default Home;
