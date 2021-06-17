import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const Layout = () => (
  <Root>
    <Content />
  </Root>
);

const Root = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export default Layout;
