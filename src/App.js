import React from 'react';
import { Helmet } from 'react-helmet';

import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Página inicial</title>
        <meta name="description" content="Um teste com Helmet" />
      </Helmet>
      <GlobalStyle />
    </div>
  );
}

export default App;
