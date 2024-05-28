/* eslint-disable max-len */
import React, { useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useLocation, NavLink } from 'react-router-dom';
import home from '../../icons/Home.svg';
import vector from '../../icons/Vector.svg';
import leftArrow from '../../icons/leftArrow.svg';
import rightArrow from '../../icons/rightArrow.svg';
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
        <div className="productList__wrapper">
          <NavLink className="productList__icon" to={'/'}>
            <img className="productList__icon-home" src={home} alt="home" />{' '}
            <img className="productList__icon" src={vector} alt="right arrow" />
            <span className="productList__text">Phones</span>
          </NavLink>
        </div>
        <div>
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
