import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Page } from './components/Page';
import { NotFoundPage } from './components/NotFoundPage';

export const App = () => (
  <Routes>
    <Header />
    <Route element={<Page />}>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/phones" element={<h1>phones</h1>} />
      <Route path="/tablets" element={<h1>tablets</h1>} />
      <Route path="/accessories" element={<h1>accessories</h1>} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
    <Footer />
  </Routes>
);
