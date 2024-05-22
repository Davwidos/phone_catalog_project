import { createRoot } from 'react-dom/client';
import { App } from './App';
import { MyContextProvider } from './provider/CartProvider';
import { HashRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <MyContextProvider>
      <App />
    </MyContextProvider>
    ,
  </Router>,
);
