import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { StyleSheetManager } from 'styled-components';

const theme = {
  colors: {
    brdPrifile: '#c4aead',
  },

  radii: {
    sm: '4px',
    md: '50%',
  },

  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={prop => prop !== 'isOnline'}>
        <App />
      </StyleSheetManager>
    </ThemeProvider>
  </React.StrictMode>
);
