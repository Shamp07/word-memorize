import React, { ChangeEvent, useCallback } from 'react';
import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';

import Title from '@atoms/Title';
import * as T from '@types';

interface Props {
  readonly text: string;
  onChangeText(event: ChangeEvent<HTMLTextAreaElement>): void;
  setPage(page: T.ContentPage): void;
}

const Input = ({ text, onChangeText, setPage }: Props) => {
  const moveToMemorize = useCallback(() => {
    if (!text.trim()) {
      alert('단어를 하나이상 입력해주세요.');
      return;
    }

    setPage(T.ContentPage.MEMORIZE);
  }, [text]);

  return (
    <Root>
      <Title text="영어단어 입력" />
      <Description>영어단어들을 줄바꿈으로 구분하여 붙여넣어 주세요.</Description>
      <TextareaWrapper>
        <Textarea
          value={text}
          onChange={onChangeText}
          rowsMin={15}
          rowsMax={40}
          placeholder="영단어들을 입력해주세요."
        />
      </TextareaWrapper>
      <ButtonWrapper>
        <SubmitButton variant="contained" color="primary" size="large" onClick={moveToMemorize}>
          다음
        </SubmitButton>
      </ButtonWrapper>
    </Root>
  );
};

const Root = styled.div`
  width: 500px;
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
    border-radius: 10px;
  }
`;

export default Input;
