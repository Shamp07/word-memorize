import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Layout from './Layout';

const App = () => (
  <>
    <GlobalStyle />
    <Layout />
  </>
);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f3f5f6;
    font-family: 'Roboto', 'Noto Sans KR', serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export default App;
