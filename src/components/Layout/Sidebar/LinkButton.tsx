import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import Button from '@atoms//Button';

interface Props {
  path: string;
  children: ReactNode;
}

const Link = styled(NavLink)`
  display: block;
  width: 100%;
  height: 100%;
  
  &.active {
    color: white;
    border-right: 2px solid #0083FF;

    & svg {
      color: #0083FF;
    }
  }

  & svg {
    width: 28px;
    height: 28px;
    color: #2F2F2F;
  }
`;

const SecondButton = styled(Button)`
  width: 56px;
  height: 56px;
  border-radius: 23px;
`;

function LinkButton({ path, children }: Props) {
  return (
    <li>
      <Link to={path} className={({ isActive }) => (isActive ? 'active' : undefined)}>
        <SecondButton variant="text">
          {children}
        </SecondButton>
      </Link>
    </li>
  );
}

export default LinkButton;
