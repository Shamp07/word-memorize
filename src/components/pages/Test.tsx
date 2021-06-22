import React, {
  ChangeEvent, useCallback, useEffect, useRef, useState,
  KeyboardEvent,
} from 'react';

import * as T from '@types';
import Title from '@atoms/Title';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

interface Props {
  readonly vocas: T.Vocabulary[];
  setPage(page: T.ContentPage): void;
}

const Test = ({ vocas, setPage }: Props) => {
  const input = useRef<HTMLInputElement>(null);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    input?.current?.focus();
  }, []);

  const moveToInput = useCallback(() => {
    setPage(T.ContentPage.INPUT);
  }, []);

  const onChangeAnswer = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  }, [setAnswer]);

  const submitAnswer = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    if (answer === vocas[index].word) {
      const currentIndex = index + 1;
      if (currentIndex < vocas.length) {
        setIndex(currentIndex);
        setAnswer('');
        setIsWrong(false);
      } else setIsDone(true);
    } else setIsWrong(true);
  };

  if (isDone) {
    // TODO:테스트 점수 구현
    return (
      <div>
        테스트 완료
      </div>
    );
  }

  return (
    <Root>
      <Title text="테스트" />
      <Article isWrong={isWrong}>
        <h2>
          {vocas[index].means}
        </h2>
        <input
          placeholder="스펠링을 입력해주세요."
          onChange={onChangeAnswer}
          value={answer}
          ref={input}
          onKeyPress={submitAnswer}
        />
      </Article>
      <ButtonWrapper>
        <PrevButton variant="contained" color="default" size="large">
          이전
        </PrevButton>
        <SubmitButton variant="contained" color="primary" size="large" onClick={moveToInput}>
          테스트 끝내기
        </SubmitButton>
      </ButtonWrapper>
    </Root>
  );
};

interface WrongProp {
  isWrong: boolean;
}

const Root = styled.div`
  width: 500px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Article = styled.article<WrongProp>`
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  padding: 20px;
  text-align: center;
  
  & > h2 {
    margin-bottom: 50px;
  }
  
  & > input {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${(props) => (props.isWrong ? 'red' : '#e6e6e6')};
    outline: 0;
  }
`;

const PrevButton = styled(Button)`
  &&& {
    font-family: inherit;
    box-shadow: none;
    border-radius: 10px;
  }
`;

const SubmitButton = styled(Button)`
  &&& {
    margin-left: auto;
    font-family: inherit;
    box-shadow: none;
    border-radius: 10px;
  }
`;

export default Test;
