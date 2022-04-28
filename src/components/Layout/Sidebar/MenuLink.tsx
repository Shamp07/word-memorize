import React, { ReactNode } from 'react';
import { Link as RawLink, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import palette from '@constants/palette';

interface RootProps {
  isActive: boolean;
}

const Root = styled.li<RootProps>`
  height: 24px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 36px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 26px;
  font-size: 14px;
  
  & i {
    font-size: 26px;
    margin-right: 20px;
  }
  
  ${({ isActive }) => (isActive ? css`
    background: ${palette.themeWhite.toString()};
    
    & > a {
      color: ${palette.typePrimary.toString()};
      &:hover {
        color: ${palette.typePrimary.toString()};
      }
    }
    
    & i {
      color: ${palette.typePrimary.toString()};
    }
  ` : css`
    & > a {
      color: ${palette.themeWhite.toString()};
      &:hover {
        color: ${palette.disabledHoverMenu.toString()};
      }
    }
    
    & i {
      color: ${palette.disabledMenu.toString()};
      
    }
  `)}
`;

const Link = styled(RawLink)`
  color: inherit;
  display: inline-flex;
  align-items: center;
  height: 24px;
  text-decoration-line: none;
  transition: color .25s;
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
