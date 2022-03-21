import React, {
  ChangeEvent, useCallback, useEffect, useRef, useState,
  KeyboardEvent, useMemo,
} from 'react';

import * as T from '@types';
import Title from '@atoms/Title';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

interface Props {
  readonly vocas: T.Vocabulary[];
  setVocas(vocas: T.Vocabulary[]): void;
  setPage(page: T.ContentPage): void;
}

const Test = ({ vocas, setVocas, setPage }: Props) => {
  const input = useRef<HTMLInputElement>(null);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [score, setScore] = useState(100);
  const [wrongVocas, setWrongVocas] = useState<T.Vocabulary[]>([]);

  useEffect(() => {
    input?.current?.focus();
  }, []);

  const scorePerWord = useMemo(() => 100 / vocas.length, [vocas.length]);

  const moveToInput = useCallback(() => {
    setVocas([]);
    setPage(T.ContentPage.INPUT);
  }, []);

  const moveToMemorize = useCallback(() => {
    setPage(T.ContentPage.MEMORIZE);
  }, []);

  const onChangeAnswer = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  }, [setAnswer]);

  const submitAnswer = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;

    if (!answer.trim()) {
      alert('단어의 스펠링을 입력해주세요!');
      return;
    }

    if (answer === vocas[index].word || isWrong) {
      const currentIndex = index + 1;
      if (answer !== vocas[index].word) {
        setScore(score - (scorePerWord / 2));
        setWrongVocas(((prevState) => [...prevState, vocas[index]]));
      }
      if (currentIndex < vocas.length) {
        setIndex(currentIndex);
        setAnswer('');
        setIsWrong(false);
      } else setIsDone(true);
    } else {
      setIsWrong(true);
      setAnswer('');
      setScore(score - (scorePerWord / 2));
    }
  };

  const wrongMessage = useMemo(() => (isWrong ? (
    <WarningDescription>
      오답입니다. 한번 더 틀리면 다음 단어로 넘어갑니다.
    </WarningDescription>
  ) : null), [isWrong]);

  const WrongVocaList = useMemo(() => wrongVocas.map(({ word, means }) => (
    <li key={word}>
      <h3>{word}</h3>
      <div>{means}</div>
    </li>
  )), [wrongVocas]);

  const WrongVocaSection = useMemo(() => (wrongVocas.length ? (
    <WrongVocasWrapper>
      <hr />
      <h3>틀린 단어 목록</h3>
      <ul>
        {WrongVocaList}
      </ul>
    </WrongVocasWrapper>
  ) : null), [wrongVocas.length]);

  if (isDone) {
    return (
      <Root>
        <Title text="테스트 완료" />
        <Article isWrong={isWrong}>
          <h1>
            <div>점수</div>
            <div>{score.toFixed(1)}</div>
          </h1>
          <h3>
            {vocas.length}
            개 중
            {' '}
            {vocas.length - wrongVocas.length}
            개를 맞추셨습니다!
          </h3>
          {WrongVocaSection}
        </Article>
        <ButtonWrapper>
          <PrevButton variant="contained" color="default" size="large" onClick={moveToMemorize}>
            재시험 보기
          </PrevButton>
          <SubmitButton variant="contained" color="primary" size="large" onClick={moveToInput}>
            영어단어 입력
          </SubmitButton>
        </ButtonWrapper>
      </Root>
    );
  }

  return (
    <Root>
      <Title text="테스트" />
      <Article isWrong={isWrong}>
        <div>
          {index + 1}
          /
          {vocas.length}
        </div>
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
        {wrongMessage}
      </Article>
      <ButtonWrapper>
        <PrevButton variant="contained" color="default" size="large" onClick={moveToMemorize}>
          이전
        </PrevButton>
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

const WarningDescription = styled.div`
  margin-top: 10px;
  color: red;
  font-size: 13px;
`;

const WrongVocasWrapper = styled.div`
  margin-top: 20px;
  
  & > ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
  
  & > h3 {
    margin-bottom: 15px;
  }
  
  & > hr {
    border: 0;
    background: #e6e6e6;
    height: 1px;
  }
`;

export default Test;
