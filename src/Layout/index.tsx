import React, { ReactNode } from 'react';
import styled from 'styled-components';

import palette from '@constants/palette';
import GlobalStyle from './GlobalStyle';
import Sidebar from './Sidebar';

interface Props {
  children: ReactNode;
}

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 1185px;
  height: 756px;
  background: ${palette.background.toString()};
  border-radius: 24px;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.0411932);
`;

function Layout({ children }: Props) {
  return (
    <Root>
      <GlobalStyle />
      <Sidebar />
      {children}
    </Root>
  );
}

export default Layout;
