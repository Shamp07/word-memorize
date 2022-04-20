import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';

import palette from '@constants/palette';
import magnifier from '@assets/images/magnifier.png';
import globalStyle from './globalStyle';
import Sidebar from './Sidebar';

const Root = styled.div`
  position: relative;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  width: 1400px;
  height: 826px;
  background: ${palette.themeWhite.toString()};
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0px 10px 100px rgba(63, 39, 102, 0.15);
  position: relative;
  z-index: 10;
`;

const Magnifier = styled.img`
  position: absolute;
  top: -150px;
  left: -100px;
  z-index: 20;
`;

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Root>
      <Magnifier src={magnifier} />
      <Inner>
        <Global styles={globalStyle} />
        <Magnifier src={magnifier} />
        <Sidebar />
        {children}
      </Inner>
    </Root>
  );
}

export default Layout;
