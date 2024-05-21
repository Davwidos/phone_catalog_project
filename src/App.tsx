import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Page } from './components/Page';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { Cart } from './components/cart/Cart';

export const App = () => (
  <>
    <BurgerMenu />
    <Routes>
      <Route element={<Page />}>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/phones" element={<h1>phones</h1>} />
        <Route path="/tablets" element={<h1>tablets</h1>} />
        <Route path="/accessories" element={<h1>accessories</h1>} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </>
);
