import { createRoot } from 'react-dom/client';
import { App } from './App';
import { MyContextProvider } from './provider/CartProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>,
);
