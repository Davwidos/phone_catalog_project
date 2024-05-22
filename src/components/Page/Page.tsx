import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import './Page.scss';

export const Page: FC = () => (
  <div className="page">
    <Outlet />
  </div>
);
