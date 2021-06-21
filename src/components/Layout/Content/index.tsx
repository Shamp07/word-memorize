import React, {
  ChangeEvent, useCallback, useState, useMemo,
} from 'react';
import styled from 'styled-components';

import { ContentPage } from '@types';
import Input from '@pages/Input';
import Memorize from '@pages/Memorize';
import Test from '@pages/Test';

const Content = () => {
  const [text, setText] = useState('');
  const [page, setPage] = useState<ContentPage>(ContentPage.INPUT);

  const onChangeText = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }, [setText]);

  const movePage = useCallback(() => {
    if (!text.trim()) {
      alert('입력해주세요!');
      return;
    }

    setPage(ContentPage.MEMORIZE);
  }, [setPage, text]);

  const pageContent = useMemo(() => {
    switch (page) {
      case ContentPage.INPUT:
        return <Input text={text} onChangeText={onChangeText} movePage={movePage} />;
      case ContentPage.MEMORIZE:
        return <Memorize text={text} />;
      case ContentPage.TEST:
        return <Test />;
      default:
        return null;
    }
  }, [page, text]);

  return (
    <Root>
      {pageContent}
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
