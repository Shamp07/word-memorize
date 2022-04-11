import React from 'react';
import styled from '@emotion/styled';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { css, Global } from '@emotion/react';

import { ContentPath } from '@constants/route';

const Root = styled.div`
  margin: 22px;
  width: 100%;
  height: 100%;
  position: relative;
  
  & > div, & > div > div {
    width: 100%;
    height: 100%;
  }
`;

const ContentInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`;

const animation = css`
  .slide-enter,
  .slide-exit {
    transition: transform 1000ms ease-out;
  }

  .slide-enter {
    transform: translateX(100%);
  }

  .slide-enter.slide-enter-active {
    transform: translateX(0%);
  }

  .slide-exit {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    transform: translateX(0%);
  }

  .slide-exit-active {
    transform: translateX(-100%);
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
      <ContentInner>
        <Global styles={animation} />
        <TransitionGroup>
          <CSSTransition key={pathname} classNames="slide" timeout={2000}>
            <Routes>
              {Object.values(ContentPath).map((path) => (
                <Route path={path} element={<RouteWrapper className="inner">{path}</RouteWrapper>} />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </ContentInner>
    </Root>
  );
}

export default Content;
