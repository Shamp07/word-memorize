import React from 'react';
import styled from '@emotion/styled';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';

import Button from '@atoms/Button';
import { ContentPath } from '@constants/route';
import LinkButton from './LinkButton';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 22px;
  width: 76px;
  height: 658px;
  border-right: 2px solid #E4E4E4;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const PrimaryButton = styled(Button)`
  width: 56px;
  height: 56px;
  background: #0083FF;
  border-radius: 23px;
  
  & > svg {
    width: 28px;
    height: 28px;
    color: white;
  }
`;

const UserButton = styled(PrimaryButton)`
  border: 2px solid #0083FF;
  
  & > svg {
    color: #0083FF;
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
  const menus = menu.map(({ path, icon }) => <LinkButton path={path}>{icon}</LinkButton>);

  return (
    <Root>
      <PrimaryButton variant="contained">
        <SentimentSatisfiedAltIcon />
      </PrimaryButton>
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
