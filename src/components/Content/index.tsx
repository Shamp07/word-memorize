import React, { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

import * as T from '@types';
import Input from './Input';
import Memorize from './Memorize';
import Test from './Test';

const Content = () => {
  const [vocas, setVocas] = useState<T.Vocabulary[]>([]);
  const [text, setText] = useState('');
  const [page, setPage] = useState(T.ContentPage.INPUT);

  const onChangeText = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }, [setText]);

  const content = () => {
    switch (page) {
      case T.ContentPage.INPUT:
        return <Input text={text} onChangeText={onChangeText} setPage={setPage} />;
      case T.ContentPage.MEMORIZE:
        return <Memorize text={text} setPage={setPage} vocas={vocas} setVocas={setVocas} />;
      case T.ContentPage.TEST:
        return (
          <Test
            vocas={vocas.sort(() => Math.random() - 0.5)}
            setVocas={setVocas}
            setPage={setPage}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Root>
      {content}
    </Root>
  );
};

const Root = styled.div`
  border-radius: 14px;
  box-shadow: rgb(20 20 20 / 2%) 2px 8px 12px 0, rgb(20 20 20 / 2%) 0 1px 3px 0;
  background-color: #fff;
  margin: auto;
  padding: 20px;
  color: rgb(77, 76, 76);
`;

export default Content;
