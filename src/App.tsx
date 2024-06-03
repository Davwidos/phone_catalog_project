import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Page } from './components/Page/Page';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { Cart } from './components/Cart/Cart';
import { ProductList } from './components/ProductList/ProductList';
import { FavouritesPage } from './components/FavouritesPage/FavouritesPage';
import { Homepage } from './components/Homepage/Homepage';
import { ProductPage } from './components/ProductPage';
import { productCategories } from './types/ProuductCategory';
export const App = () => (
  <Routes>
    <Route element={<Page />}>
      <Route index element={<Homepage />} />
      {productCategories.map(category => (
        <Route key={category} path={category}>
          <Route index element={<ProductList category={category} />} />
          <Route path=":id" element={<ProductPage />} />
        </Route>
      ))}
      <Route path="favourites" element={<FavouritesPage />} />
      <Route path="home" element={<Navigate to="/" />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
