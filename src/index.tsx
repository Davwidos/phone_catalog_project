import { createRoot } from 'react-dom/client';
import { App } from './App';
import { HashRouter as Router } from 'react-router-dom';
import React from 'react';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <App />
  </Router>,
);
