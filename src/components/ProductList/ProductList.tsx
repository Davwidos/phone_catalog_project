/* eslint-disable max-len */
import React, { useCallback, useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useLocation } from 'react-router-dom';
import leftArrow from '../../icons/leftArrow.svg';
import rightArrow from '../../icons/rightArrow.svg';
import { ProductCategory } from '../../types/ProuductCategory';
import { useAppSelector } from '../../app/hooks';
import { selectFilterdProducts } from '../../features/products/selectors';
import { Product } from '../../types/Product';

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

const TILTES: Record<ProductCategory, string> = {
  phones: 'Mobile phones',
  tablets: 'Tablets',
  accessories: 'Accessories',
};

interface Props {
  category: ProductCategory;
}

export const ProductList: React.FC<Props> = ({ category }) => {
  const checkCategory = useCallback(
    (p: Product) => p.category === category,
    [category],
  );

  const products = useAppSelector(state =>
    selectFilterdProducts(state, checkCategory),
  );
  const location = useLocation();
  const path = getPathFromLocation(location.pathname);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const pageRange = 4;
  const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const endPage = Math.min(totalPages, startPage + pageRange - 1);

  const handleClick = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <Breadcrumbs path={path} />
      <div className="productList">
        <div>
          <h1 className="productList__title">{TILTES[category]}</h1>
          <span className="productList__title-info">{`${products.length} models`}</span>
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
              value={itemsPerPage}
              onChange={e => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </div>
        </div>
      </div>

      {currentProducts.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
      <div className="productList__buttons">
        <button
          className="productList__button productList__button-arrow"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <img className="productList__icon" src={leftArrow} alt="left arrow" />
        </button>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i,
        ).map(page => (
          <button
            key={page}
            className={`productList__button ${currentPage === page ? 'active' : ''}`}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="productList__button productList__button-arrow"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <img
            className="productList__icon"
            src={rightArrow}
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  );
};
