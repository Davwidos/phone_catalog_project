import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './Page.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { FavouritesPage } from '../FavouritesPage/FavouritesPage';

export const Page: FC = () => (
  <div className="page">
    <Header />
    <FavouritesPage />
    <Outlet />
    <Footer />
  </div>
);
