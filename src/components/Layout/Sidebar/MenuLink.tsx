import React, { ReactNode } from 'react';
import { Link as RawLink, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import palette from '@constants/palette';

const Root = styled.li<{ isActive: boolean }>`
  height: 24px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 36px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 26px;
  font-size: 14px;
  background: ${({ isActive }) => (isActive ? palette.themeWhite.toString() : 'transparent')};
  
  & > a {
    color: ${({ isActive }) => (isActive ? palette.typePrimary.toString() : palette.themeWhite.toString())};  
  }

  & svg {
    width: 26px;
    height: 26px;
    color: ${({ isActive }) => (isActive ? palette.typePrimary.toString() : palette.disabledMenu.toString())};
    margin-right: 20px;
  }
`;

const Link = styled(RawLink)`
  color: inherit;
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  text-decoration-line: none;
`;

const Name = styled.div`
  height: 24px;
  line-height: 24px;
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
        <Name>{name}</Name>
      </Link>
    </Root>
  );
}

export default MenuLink;
