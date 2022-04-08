import React from 'react';
import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';

import { ContentPath } from '@constants/route';

const Root = styled.div`
  margin: 22px;
`;

function Content() {
  return (
    <Root>
      <Routes>
        <Route path={ContentPath.HOME} element={<div />} />
        <Route path={ContentPath.WORD} element={<div />} />
        <Route path={ContentPath.CARD} element={<div />} />
        <Route path={ContentPath.GAME} element={<div />} />
        <Route path={ContentPath.TIMER} element={<div />} />
        <Route path={ContentPath.ANALYTICS} element={<div />} />
      </Routes>
    </Root>
  );
}

export default Content;
