import React from 'react';
import styled from '@emotion/styled';

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
  background: linear-gradient(${palette.sidebarBackgroundGradient.first.toString()}, ${palette.sidebarBackgroundGradient.second.toString()});
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

const Overlay = styled.div`
  background: linear-gradient(to left, ${palette.themeWhite.alpha(0).toString()}, ${palette.themeWhite.alpha(0.35).toString()});
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const SecondOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: ${palette.sidebarOverlay.toString()};
`;

const Dividing = styled.hr`
  width: 130px;
  border-color: ${palette.themeWhite.alpha(0.2).toString()};
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 24px;
`;

const topMenus = [{
  path: ContentPath.DASHBOARD,
  name: 'Dashboard',
  icon: <i className="ri-home-4-fill" />,
}, {
  path: ContentPath.DICTIONARY,
  name: 'Dictionary',
  icon: <i className="ri-book-2-fill" />,
}, {
  path: ContentPath.QUIZ,
  name: 'Quiz',
  icon: <i className="ri-question-fill" />,
}, {
  path: ContentPath.GAME,
  name: 'Game',
  icon: <i className="ri-game-fill" />,
}];

const bottomMenus = [{
  path: ContentPath.SETTING,
  name: 'Setting',
  icon: <i className="ri-settings-5-fill" />,
}, {
  path: ContentPath.LOGIN,
  name: 'Log In',
  icon: <i className="ri-login-box-fill" />,
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
      <Overlay>
        <SecondOverlay />
      </Overlay>
      <Menu>
        {topMenuList}
        <Dividing />
        {bottomMenuList}
      </Menu>
    </Root>
  );
}

export default Sidebar;
