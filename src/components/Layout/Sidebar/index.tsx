import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

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
`;

const SecondButton = styled(PrimaryButton)`
  background: transparent;
`;

const ProfileButton = styled(SecondButton)`
  border: 2px solid #0083FF;
`;

const PrimaryIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: white;
`;

const SecondIcon = styled(PrimaryIcon)`
  color: #2F2F2F;
`;

const ProfileIcon = styled(PrimaryIcon)`
  color: #0083FF;
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
        <PrimaryIcon icon={faBrain} />
      </PrimaryButton>
      <Menu>
        <SecondButton variant="text">
          <SecondIcon icon={faBrain} />
        </SecondButton>
        <SecondButton variant="text">
          <SecondIcon icon={faBrain} />
        </SecondButton>
        <SecondButton variant="text">
          <SecondIcon icon={faBrain} />
        </SecondButton>
        <SecondButton variant="text">
          <SecondIcon icon={faBrain} />
        </SecondButton>
        <SecondButton variant="text">
          <SecondIcon icon={faBrain} />
        </SecondButton>
      </Menu>
      <ProfileButton variant="text">
        <ProfileIcon icon={faUser} />
      </ProfileButton>
    </Root>
  );
}

export default Sidebar;
