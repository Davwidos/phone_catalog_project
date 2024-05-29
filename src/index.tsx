import { createRoot } from 'react-dom/client';
import { App } from './App';
import CartProvider from './provider/CartProvider';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Provider store={store}>
      <CartProvider>
        <App />
      </CartProvider>
    </Provider>
  </Router>,
);
