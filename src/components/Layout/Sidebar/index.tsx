import React from 'react';
import styled from '@emotion/styled';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';


import Button from '@components/atoms/Button';
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
  position: relative;;
`;

const PrimaryButton = styled(Button)`
  width: 56px;
  height: 56px;
  background: ${palette.themePrimary.toString()};
  border-radius: 23px;
  
  & > svg {
    width: 28px;
    height: 28px;
    color: white;
  }
`;

const UserButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid ${palette.themePrimary.toString()};
  
  & > svg {
    color: ${palette.themePrimary.toString()};
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 326px;
  margin-left: 48px;
  margin-top: 160px;
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

const menus = [{
  path: ContentPath.HOME,
  name: 'text',
  icon: <LibraryBooksOutlinedIcon />,
}, {
  path: ContentPath.DICTIONARY,
  name: 'text',
  icon: <LibraryBooksOutlinedIcon />,
}, {
  path: ContentPath.GAME,
  name: 'text',
  icon: <SportsEsportsOutlinedIcon />,
}, {
  path: ContentPath.TIMER,
  name: 'text',
  icon: <TimerOutlinedIcon />,
}, {
  path: ContentPath.ANALYTICS,
  name: 'text',
  icon: <TimelineOutlinedIcon />,
}];

function Sidebar() {
  const menuList = menus.map((menu) => (
    <MenuLink key={menu.path} menu={menu} />
  ));

  return (
    <Root>
      <RootOverlay>
        <RootOverlayColor />
      </RootOverlay>
      <Menu>
        {menuList}
      </Menu>
      <UserButton variant="text">
        <FaceOutlinedIcon />
      </UserButton>
    </Root>
  );
}

export default Sidebar;
