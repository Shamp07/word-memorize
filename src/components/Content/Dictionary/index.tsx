import React from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

import palette from '@constants/palette';
import WordTable from './WordTable';

const Root = styled.div``;

const Title = styled.h1`
  display: block;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 24px;
`;

const SubTitle = styled.h2`
  display: block;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 24px;
`;

const Form = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const Input = styled(TextField)`
  width: 30%;
  & + & {
    margin-left: 24px;
  }
`;

const PlusIcon = styled.i`
  margin-left: 12px;
  font-size: 28px;
  line-height: 66px;
  cursor: pointer;
  transition: color .25s;
  
  &:hover {
    color: ${palette.disabledMenu.toString()};
  }
`;

function Dictionary() {
  return (
    <Root>
      <Title>단어 입력하기</Title>
      <Form>
        <Input label="단어를 입력하세요." variant="standard" />
        <Input label="단어의 뜻을 입력하세요." variant="standard" />
        <PlusIcon className="ri-add-circle-line" />
      </Form>
      <div>
        <SubTitle>단어 데이터 셋</SubTitle>
        <WordTable />
      </div>
    </Root>
  );
}

export default Dictionary;
