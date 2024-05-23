import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Page } from './components/Page/Page';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { Cart } from './components/Cart/Cart';
import { ProductList } from './components/ProductList/ProductList';
import { FavouritesPage } from './components/FavouritesPage/FavouritesPage';
export const App = () => (
  <Routes>
    <Route element={<Page />}>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/phones" element={<ProductList />} />
      <Route path="/tablets" element={<ProductList />} />
      <Route path="/accessories" element={<ProductList />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
