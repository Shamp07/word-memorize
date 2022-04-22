import React from 'react';
import styled from '@emotion/styled';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { ContentPath } from '@constants/route';
import palette from '@constants/palette';
import MenuLink from './MenuLink';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 272px;
  height: 100%;
  box-sizing: border-box;
  background: linear-gradient(#8F66F9, #D76EAD);
  position: relative;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  overflow: hidden;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 48px;
  margin-top: 160px;
  z-index: 1;
`;

const RootOverlay = styled.div`
  background: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.35));
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const RootOverlayColor = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(36, 39, 48, 0.8);
`;

const Dividing = styled.hr`
  width: 130px;
  border-color: ${palette.themeWhite.alpha(0.2).toString()};
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 24px;
  
`;

const topMenus = [{
  path: ContentPath.HOME,
  name: 'Dashboard',
  icon: <HomeOutlinedIcon />,
}, {
  path: ContentPath.DICTIONARY,
  name: 'Dictionary',
  icon: <LibraryBooksOutlinedIcon />,
}, {
  path: ContentPath.QUIZ,
  name: 'Quiz',
  icon: <QuizOutlinedIcon />,
}, {
  path: ContentPath.GAME,
  name: 'Game',
  icon: <SportsEsportsOutlinedIcon />,
}];

const bottomMenus = [{
  path: ContentPath.SETTING,
  name: 'Setting',
  icon: <SettingsOutlinedIcon />,
}, {
  path: ContentPath.LOGIN,
  name: 'Log In',
  icon: <LoginOutlinedIcon />,
}];

function Sidebar() {
  const topMenuList = topMenus.map((menu) => (
    <MenuLink key={menu.path} menu={menu} />
  ));

  const bottomMenuList = bottomMenus.map((menu) => (
    <MenuLink key={menu.path} menu={menu} />
  ));

  return (
    <Root>
      <RootOverlay>
        <RootOverlayColor />
      </RootOverlay>
      <Menu>
        {topMenuList}
        <Dividing />
        {bottomMenuList}
      </Menu>
    </Root>
  );
}

export default Sidebar;
