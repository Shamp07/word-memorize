import React from 'react';
import styled from '@emotion/styled';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { css, Global } from '@emotion/react';

import { ContentPath } from '@constants/route';
import Home from './Home';
import Word from './Word';
import Card from './Card';
import Game from './Game';
import Timer from './Timer';
import Analytics from './Analytics';

const Root = styled.div`
  margin: 22px;
  width: 100%;
  height: 100%;
  position: relative;
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

const contentRoutes = [{
  path: ContentPath.HOME,
  element: <Home />,
}, {
  path: ContentPath.WORD,
  element: <Word />,
}, {
  path: ContentPath.CARD,
  element: <Card />,
}, {
  path: ContentPath.GAME,
  element: <Game />,
}, {
  path: ContentPath.TIMER,
  element: <Timer />,
}, {
  path: ContentPath.ANALYTICS,
  element: <Analytics />,
}];

function Content() {
  const { pathname } = useLocation();

  return (
    <Root>
      <ContentInner>
        <Global styles={animation} />
        <TransitionGroup>
          <CSSTransition key={pathname} classNames="slide" timeout={2000}>
            <Routes>
              {contentRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </ContentInner>
    </Root>
  );
}

export default Content;
