import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import Button from '@components/atoms/Button';
import palette from '@constants/palette';

const animation = keyframes`
  from {
    height: 0;
  }
  
  to {
    height: 100%;
  }
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  
  &.active {
    &:before {
      position: absolute;
      left: 100%;
      content: '';
      width: 2px;
      height: 100%;
      background: ${palette.themePrimary.toString()};
      animation: ${animation} 0.4s ease 1;
    }

    & svg {
      color: ${palette.themePrimary.toString()};
    }
  }

  & svg {
    transition: color 0.4s;
    width: 28px;
    height: 28px;
    color: ${palette.disabledMenu.toString()};
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
