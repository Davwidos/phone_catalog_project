import './Shop-by-category.scss';
import Phones from '../../images/main/product-category/Phones.svg';
import Accessories from '../../images/main/product-category/Accessories.svg';
import Tablets from '../../images/main/product-category/Tablets.svg';
import { Link } from 'react-router-dom';
export const ShopByCategory = () => {
  return (
    <div className="main__shop-by-category shop-by-category">
      <h1 className="shop-by-category__title">Shop by category</h1>
      <Link to="/phones">
        <div className="product-category">
          <img
            className="product-category__image"
            src={Phones}
            alt="mobile-phones"
          />

          <p className="product-category__category">Mobile phones</p>
          <p className="product-category__models">95 models</p>
        </div>
      </Link>

      <Link to="/tablets">
        <div className="product-category">
          <img
            className="product-category__image"
            src={Tablets}
            alt="tablets"
          />

          <p className="product-category__category">Tablets</p>
          <p className="product-category__models">24 models</p>
        </div>
      </Link>

      <Link to="/accessories">
        <div className="product-category">
          <img
            className="product-category__image"
            src={Accessories}
            alt="accessories"
          />

          <p className="product-category__category">Accessories</p>
          <p className="product-category__models">100 models</p>
        </div>
      </Link>
    </div>
  );
};
