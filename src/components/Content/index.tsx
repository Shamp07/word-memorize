import React from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from '@react-spring/web';
import { Routes, Route, useLocation } from 'react-router-dom';

import { ContentPath } from '@constants/route';
import Home from './Home';
import Word from './Word';
import Card from './Card';
import Game from './Game';
import Timer from './Timer';
import Analytics from './Analytics';

const Root = styled.div`
  padding: 47px 22px;
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const AnimatedWrapper = styled(animated.div)`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
`;

const contentRoutes = [{
  path: ContentPath.HOME,
  element: <Home />,
}, {
  path: ContentPath.DICTIONARY,
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
    config: { duration: 500 },
  });

  return (
    <Root>
      <ContentWrapper>
        {transitions((props, item) => (
          <AnimatedWrapper style={props}>
            <Routes location={item}>
              {contentRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </AnimatedWrapper>
        ))}
      </ContentWrapper>
    </Root>
  );
}

export default Content;
