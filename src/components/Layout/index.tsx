import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/react';

import palette from '@constants/palette';
import magnifier from '@assets/images/magnifier.png';
import folder from '@assets/images/folder.png';
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
  background: ${palette.contentBackground.toString()};
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 100px rgba(63, 39, 102, 0.15);
  position: relative;
  z-index: 10;
  backdrop-filter: blur(60px);
`;

const Magnifier = styled.img`
  position: absolute;
  top: -110px;
  left: -65px;
  z-index: 20;
  filter: drop-shadow(0px 9.88285px 98.8285px rgba(63, 39, 102, 0.1));
`;

const Folder = styled.img`
  position: absolute;
  bottom: -110px;
  right: -145px;
  z-index: 5;
  filter: drop-shadow(0px 8.90782px 89.0782px rgba(63, 39, 102, 0.1));
`;

const FirstBackgroundPage = styled.div`
  position: absolute;
  width: 1100px;
  height: 700px;
  left: 150px;
  top: 183px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 100px rgba(63, 39, 102, 0.04);
  backdrop-filter: blur(70px);
  border-radius: 34px;
  z-index: 5;
`;

const SecondBackgroundPage = styled.div`
  position: absolute;
  width: 1000px;
  height: 600px;
  left: 200px;
  top: 331px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 100px rgba(73, 28, 100, 0.04);
  backdrop-filter: blur(50px);
  border-radius: 34px;
  z-index: 4;
`;

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Root>
      <Magnifier src={magnifier} />
      <Folder src={folder} />
      <FirstBackgroundPage />
      <SecondBackgroundPage />
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
