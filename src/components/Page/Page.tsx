import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './Page.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Page: FC = () => (
  <div className="page">
    <Header />
    <Outlet />
    <Footer />
  </div>
);
