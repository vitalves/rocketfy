import React from 'react';
import { Helmet } from 'react-helmet';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Página inicial</title>
        <meta name="description" content="Um teste com Helmet" />
      </Helmet>
      <Header />
      <Board />
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
