import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

import Title from '@atoms/Title';
import * as T from '@types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

interface Props {
  readonly text: string;
  readonly vocas: T.Vocabulary[];
  setPage(page: T.ContentPage): void;
  setVocas(vocas: T.Vocabulary[]): void;
}

const Memorize = ({
  text, setPage, vocas, setVocas,
}: Props) => {
  const [loading, setLoading] = useState(true);

  const moveToTest = useCallback(() => {
    setPage(T.ContentPage.TEST);
  }, []);

  const moveToInput = useCallback(() => {
    setPage(T.ContentPage.INPUT);
  }, []);

  useEffect(() => {
    axios.get('/api/search', {
      params: {
        text: text.trim(),
      },
    })
      .then((result) => {
        setVocas(result.data);
        setLoading(false);
      });
  }, []);

  const vocaList = useMemo(() => vocas.map(({ word, means }) => (
    <li key={word}>
      <h2>{word}</h2>
      <div>{means}</div>
    </li>
  )), [vocas]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Root>
      <Title text="영어단어 외우기" />
      <VocaList>
        {vocaList}
      </VocaList>
      <ButtonWrapper>
        <PrevButton variant="contained" color="default" size="large" onClick={moveToInput}>
          이전
        </PrevButton>
        <SubmitButton variant="contained" color="primary" size="large" onClick={moveToTest}>
          다음
        </SubmitButton>
      </ButtonWrapper>
    </Root>
  );
};

const Root = styled.div`
  width: 800px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
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

const VocaList = styled.ul`
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  list-style: none;
  padding-left: 0;
  
  & > li {
    padding: 20px 20px 0 20px;
    display: inline-block;
    
    & > h3 {
      margin-bottom: 10px;
    }
  }
  
  & > li:last-of-type {
    padding-bottom: 20px;
  }
`;

export default Memorize;
