import { createRoot } from 'react-dom/client';
import { App } from './App';
import { MyContextProvider } from './provider/Provider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>,
);
