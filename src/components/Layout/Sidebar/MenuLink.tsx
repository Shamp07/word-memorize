import React, { ReactNode } from 'react';
import { Link as RawLink, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import palette from '@constants/palette';

const Root = styled.li<{ isActive: boolean }>`
  height: 24px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 36px;
  padding-bottom: 20px;
  padding-left: 26px;

  &.active {
    background: white;

    & svg {
      color: ${palette.typePrimary.toString()};
    }
  }

  & svg {
    width: 28px;
    height: 28px;
    color: ${palette.disabledMenu.toString()};
  }
`;

const Link = styled(RawLink)`
  color: ${palette.themeWhite.toString()};
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  position: relative;
  padding-top: 20px;
`;

interface Menu {
  path: string;
  name: string;
  icon: ReactNode;
}

interface Props {
  menu: Menu;
}

function MenuLink({ menu }: Props) {
  const { pathname } = useLocation();
  const { path, name, icon } = menu;

  return (
    <Root isActive={pathname === path}>
      <Link to={path}>
        {icon}
        {name}
      </Link>
    </Root>
  );
}

export default MenuLink;
