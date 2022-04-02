import React, { ReactNode } from 'react';
import styled from 'styled-components';

import palette from '@constants/palette';
import GlobalStyle from './GlobalStyle';

interface Props {
  children: ReactNode;
}


const Root = styled.div`
  width: 1368px;
  height: 720px;
  background: ${palette.background.toString()};
  border-radius: 24px;
`;

function Layout({ children }: Props) {
  return (
    <Root>
      <GlobalStyle />
      {children}
    </Root>
  );
}

export default Layout;
