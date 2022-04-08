import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import Button from '@components/atoms/Button';

const example = keyframes`
  from {
    border-right: 1px solid #0083FF;
  }
  
  to {
    border-right: 5px solid #0083FF;
  }
`;

const Link = styled(NavLink)`
  display: block;
  width: 100%;
  height: 100%;
  border-right: 2px solid #E4E4E4;
  transition: border 0.2s;
  
  &.active {
    color: white;
    animation: ${example} 1s ease 10;

    & svg {
      color: #0083FF;
    }
  }

  & svg {
    transition: color 0.2s;
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

interface Props {
  path: string;
  children: ReactNode;
}

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
