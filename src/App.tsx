import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Page } from './components/Page';
import { ProductList } from './components/ProductList/ProductList';
import { NotFoundPage } from './components/NotFoundPage';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route element={<Page />}>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/phones" element={<ProductList />} />
        <Route path="/tablets" element={<ProductList />} />
        <Route path="/accessories" element={<ProductList />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    <Footer />
  </>
);
