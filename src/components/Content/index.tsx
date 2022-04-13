import React from 'react';
import styled from '@emotion/styled';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';

import { ContentPath } from '@constants/route';
import Home from './Home';
import Word from './Word';
import Card from './Card';
import Game from './Game';
import Timer from './Timer';
import Analytics from './Analytics';

const Root = styled.div`
  padding: 22px;
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
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
  });

  return (
    <Root>
      <ContentInner>
        {transitions((props, item) => (
          <animated.div style={props}>
            <Routes location={item}>
              {contentRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </animated.div>
        ))}
      </ContentInner>
    </Root>
  );
}

export default Content;
