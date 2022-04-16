import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';

import Button from '@components/atoms/Button';
import { ContentPath } from '@constants/route';
import palette from '@constants/palette';
import LinkButton from './LinkButton';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 272px;
  height: 100%;
  box-sizing: border-box;
  background: 
    linear-gradient(to top right, #8BD8F8, white 50%, #FA9282);
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
`;

const menu = [{
  path: ContentPath.WORD,
  icon: <SaveAsOutlinedIcon />,
}, {
  path: ContentPath.CARD,
  icon: <QuizOutlinedIcon />,
}, {
  path: ContentPath.GAME,
  icon: <SportsEsportsOutlinedIcon />,
}, {
  path: ContentPath.TIMER,
  icon: <TimerOutlinedIcon />,
}, {
  path: ContentPath.ANALYTICS,
  icon: <TimelineOutlinedIcon />,
}];

function Sidebar() {
  const menus = menu.map(({ path, icon }) => (
    <LinkButton key={path} path={path}>{icon}</LinkButton>
  ));

  return (
    <Root>
      <Menu>
        {menus}
      </Menu>
      <UserButton variant="text">
        <FaceOutlinedIcon />
      </UserButton>
    </Root>
  );
}

export default Sidebar;
