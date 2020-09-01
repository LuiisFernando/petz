import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

import MainTheme from './styles/theme';

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={MainTheme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
}

export default App;
