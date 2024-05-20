import { FC } from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

export const NotFoundPage: FC = () => (
  <div>
    <h1>Page not found</h1>
    <Link to="/">Back to home page</Link>
  </div>
);
