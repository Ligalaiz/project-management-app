import React from 'react';
import { Global } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { globalStyle } from '@src/styles';
import { App } from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Router>
    <Global styles={globalStyle} />
    <App />
  </Router>,
);
