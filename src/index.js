import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles/globaleStyles.styled.js'
import { theme } from './globalStyles/theme.js';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
      <BrowserRouter basename='/'>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <App />
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);

