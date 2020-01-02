import React from 'react';
import { Helmet } from 'react-helmet';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Página inicial</title>
        <meta name="description" content="Um teste com Helmet" />
      </Helmet>
      <Header />
      <Board />
      <GlobalStyle />
    </>
  );
}

export default App;
