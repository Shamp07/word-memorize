import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';

const Content = () => (
  <Root>
    <TitleWrapper>
      <h1>영어단어 입력</h1>
    </TitleWrapper>
    <Description>영어단어들을 띄어쓰기로 구분하여 붙여넣어 주세요.</Description>
    <TextareaWrapper>
      <Textarea
        rowsMin={15}
        rowsMax={16}
        placeholder="영단어들을 입력해주세요."
      />
    </TextareaWrapper>
    <ButtonWrapper>
      <SubmitButton variant="contained" color="primary" size="large">
        다음
      </SubmitButton>
    </ButtonWrapper>
  </Root>
);

const Root = styled.div`
  width: 500px;
  border-radius: 14px;
  box-shadow: rgb(20 20 20 / 2%) 2px 8px 12px 0, rgb(20 20 20 / 2%) 0 1px 3px 0;
  background-color: #fff;
  margin: auto;
  padding: 20px;
  color: rgb(77, 76, 76);
`;

const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

const Description = styled.div`
  margin-bottom: 10px;
  font-size: 13px;
`;

const TextareaWrapper = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 10px;
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  outline: 0;
  border: 0;
  resize: none;
  font-family: inherit;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
`;

const SubmitButton = styled(Button)`
  &&& {
    margin-left: auto;
    font-family: inherit;
    box-shadow: none;
  }
`;

export default Content;
