import React from 'react';
import styled from 'styled-components';

const Content = () => (
  <Root>
    <h1>영단어 입력</h1>
  </Root>
);

const Root = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 14px;
  box-shadow: rgb(20 20 20 / 2%) 2px 8px 12px 0, rgb(20 20 20 / 2%) 0 1px 3px 0;
  background-color: #fff;
  margin: auto;
  padding: 20px;
`;

export default Content;
