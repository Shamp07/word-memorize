import React from 'react';
import styled from '@emotion/styled';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { css, Global } from '@emotion/react';

import { ContentPath } from '@constants/route';

const Root = styled.div`
  margin: 22px;
  width: 100%;
  height: 100%;
`;

const animation = css`
  .fade-enter .inner {
    opacity: 0;
    transform: translateX(-100%);
  }
  .fade-enter-active .inner {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit .inner {
    opacity: 1;
    transform: translateX(0%);
  }
  .fade-exit-active .inner {
    opacity: 0;
    transform: translateX(100%);
  }
  .fade-enter-active .inner,
  .fade-exit-active .inner {
    transition: opacity 500ms, transform 500ms;
  }
`;

const RouteWrapper = styled.div`
  color: white;
  background: black;
  height: 100%;
  width: 100%;
`;

function Content() {
  const { pathname } = useLocation();

  return (
    <Root>
      <Global styles={animation} />
      {Object.values(ContentPath).map((path) => (
        <CSSTransition
          in={pathname === path}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false);
          }}
          className="fade"
        >
          <Route path={path} element={<RouteWrapper className="inner">{path}</RouteWrapper>} />
        </CSSTransition>
      ))}
    </Root>
  );
}

export default Content;
