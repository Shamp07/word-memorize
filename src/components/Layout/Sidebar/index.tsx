import React from 'react';
import styled from '@emotion/styled';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import QuizIcon from '@mui/icons-material/Quiz';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import TimerIcon from '@mui/icons-material/Timer';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';

import Button from '@atoms/Button';

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

const SecondButton = styled(PrimaryButton)`
  background: transparent;
  
  & > svg {
    color: black;
  }
`;

const UserButton = styled(SecondButton)`
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

function Sidebar() {
  return (
    <Root>
      <PrimaryButton variant="contained">
        <SentimentSatisfiedAltIcon />
      </PrimaryButton>
      <Menu>
        <SecondButton variant="text">
          <SaveAsOutlinedIcon />
        </SecondButton>
        <SecondButton variant="text">
          <QuizIcon />
        </SecondButton>
        <SecondButton variant="text">
          <SportsEsportsOutlinedIcon />
        </SecondButton>
        <SecondButton variant="text">
          <TimerIcon />
        </SecondButton>
        <SecondButton variant="text">
          <TimelineOutlinedIcon />
        </SecondButton>
      </Menu>
      <UserButton variant="text">
        <FaceOutlinedIcon />
      </UserButton>
    </Root>
  );
}

export default Sidebar;
