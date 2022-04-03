import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Root = styled.div`
  margin-left: 22px;
  width: 76px;
  height: 658px;
  border-right: 2px solid #E4E4E4;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Logo = styled.div`
  width: 56px;
  height: 56px;
  background: #0083FF;
`;

function Sidebar() {
  return (
    <Root>
      <Logo />
    </Root>
  );
}

export default Sidebar;
