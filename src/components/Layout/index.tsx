import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';

import palette from '@constants/palette';
import globalStyle from './globalStyle';
import Sidebar from './Sidebar';

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 1185px;
  height: 756px;
  background: ${palette.themeWhite.toString()};
  border-radius: 24px;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.0411932);
  position: relative;
  z-index: 10;
`;

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Root>
      <Global styles={globalStyle} />
      <Sidebar />
      {children}
    </Root>
  );
}

export default Layout;
