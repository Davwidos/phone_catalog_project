import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import './App.scss';
import { Page } from './components/Page/Page';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { Cart } from './components/Cart/Cart';
import { ProductList } from './components/ProductList/ProductList';

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const { price } = location.state;
  return (
    <>
      <h1>details: {id}</h1>
      <h2>price: {price}</h2>
    </>
  );
};

export const App = () => (
  <Routes>
    <Route element={<Page />}>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/phones" element={<ProductList />} />
      <Route path="/phones/id" element={<Details />} />
      <Route path="/tablets" element={<ProductList />} />
      <Route path="/accessories" element={<ProductList />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);
