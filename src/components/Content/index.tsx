import React from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from '@react-spring/web';
import { Routes, Route, useLocation } from 'react-router-dom';

import { ContentPath } from '@constants/route';
import Dashboard from './Dashboard';
import Index from './Dictionary';
import Quiz from './Quiz';
import Game from './Game';
import Setting from './Setting';
import Login from './Login';

const Root = styled.div`
  padding: 47px;
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
  path: ContentPath.DASHBOARD,
  element: <Dashboard />,
}, {
  path: ContentPath.DICTIONARY,
  element: <Index />,
}, {
  path: ContentPath.QUIZ,
  element: <Quiz />,
}, {
  path: ContentPath.GAME,
  element: <Game />,
}, {
  path: ContentPath.SETTING,
  element: <Setting />,
}, {
  path: ContentPath.LOGIN,
  element: <Login />,
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
