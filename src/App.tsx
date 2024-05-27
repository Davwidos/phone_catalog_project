import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Page } from './components/Page/Page';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { Cart } from './components/Cart/Cart';
import { ProductList } from './components/ProductList/ProductList';
import { FavouritesPage } from './components/FavouritesPage/FavouritesPage';
import { Homepage } from './components/Homepage/Homepage';
import { ProductPage } from './components/ProductPage';
import { ProductsProider } from './provider/ProductsProvider';
import { ProductDetailsProvider } from './provider/ProductDetailsProvider';
export const App = () => (
  <Routes>
    <Route element={<Page />}>
      <Route
        path="/"
        element={
          <ProductsProider>
            <Homepage />
          </ProductsProider>
        }
      />
      <Route
        path="/phones"
        element={
          <ProductsProider category="phones">
            <ProductList />
          </ProductsProider>
        }
      />
      <Route
        path="/phones/:id"
        element={
          <ProductDetailsProvider>
            <ProductPage />
          </ProductDetailsProvider>
        }
      />
      <Route
        path="/tablets"
        element={
          <ProductsProider category="tablets">
            <ProductList />
          </ProductsProider>
        }
      />
      <Route
        path="/accessories"
        element={
          <ProductsProider category="accessories">
            <ProductList />
          </ProductsProider>
        }
      />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
