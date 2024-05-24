import { createRoot } from 'react-dom/client';
import { App } from './App';
import CartProvider from './provider/CartProvider';
import { HashRouter as Router } from 'react-router-dom';
import FavouritesProvider from './provider/FavouritesProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <CartProvider>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </CartProvider>
  </Router>,
);
