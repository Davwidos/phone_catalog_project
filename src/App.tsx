import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Page } from './components/Page/Page';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { Cart } from './components/cart/Cart';
import { ProductList } from './components/ProductList/ProductList';

export const App = () => (
  <>
    <BurgerMenu />
    <Routes>
      <Route element={<Page />}>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/phones" element={<ProductList />} />
        <Route path="/tablets" element={<ProductList />} />
        <Route path="/accessories" element={<ProductList />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </>
);