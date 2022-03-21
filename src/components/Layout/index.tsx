import React, {ReactNode} from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <Root>
    {children}
  </Root>
);

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export default Layout;
