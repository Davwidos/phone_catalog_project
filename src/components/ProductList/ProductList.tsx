import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useLocation } from 'react-router-dom';
import { useProducts } from '../../provider/ProductsProvider';

const getPathFromLocation = (
  pathname: string,
): 'Phones' | 'Tablets' | 'Accessories' => {
  switch (true) {
    case pathname.includes('/phones'):
      return 'Phones';
    case pathname.includes('/tablets'):
      return 'Tablets';
    case pathname.includes('/accessories'):
      return 'Accessories';
    default:
      throw new Error('Unknown path');
  }
};

export const ProductList: React.FC = () => {
  const { products } = useProducts();
  const location = useLocation();
  const path = getPathFromLocation(location.pathname);

  return (
    <div className="container">
      <Breadcrumbs path={path} />
      <div className="productList">
        <h1 className="productList__title">Mobile phones</h1>
        <span className="productList__title-info">95 models</span>
      </div>
      <div className="productList__sort">
        <div className="productList__item">
          <label className="productList__item-label" htmlFor="sort">
            Sort by
          </label>
          <select className="productList__item-select" name="sort" id="sort">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="price-low">Low to High</option>
            <option value="price-high">High to Low</option>
          </select>
        </div>
        <div className="productList__item">
          <label className="productList__item-label" htmlFor="itemsPerPage">
            Items on page
          </label>
          <select
            className="productList__item-select"
            name="itemsPerPage"
            id="itemsPerPage"
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </div>
      </div>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
      <div className="productList__buttons">
        <button className="productList__button productList__button-arrow">
          &lt;
        </button>
        <button className="productList__button">1</button>
        <button className="productList__button">2</button>
        <button className="productList__button">3</button>
        <button className="productList__button">4</button>
        <button className="productList__button productList__button-arrow">
          &gt;
        </button>
      </div>
    </div>
  );
};
