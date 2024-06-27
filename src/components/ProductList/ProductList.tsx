import React, { useMemo } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useLocation, useSearchParams } from 'react-router-dom';
import leftArrow from '../../icons/leftArrow.svg';
import rightArrow from '../../icons/rightArrow.svg';
// eslint-disable-next-line max-len
import { ProductCategory } from '../../types/ProuductCategory';
import { Search } from '../Search/Search';
import { api } from '../../services/api';

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
  const location = useLocation();
  const path = getPathFromLocation(location.pathname);
  const [searchParams, setSearchParams] = useSearchParams({
    sortBy: 'newest',
    perPage: '8',
    page: '1',
  });
  const apiParams = useMemo(() => {
    const sortBy = searchParams.get('sortBy') || 'newest';
    const perPage = searchParams.get('perPage') || '8';
    const page = searchParams.get('page') || '1';
    const params = new URLSearchParams({ sortBy, perPage, page, category });

    return params;
  }, [category, searchParams]);

  const { data } = api.useGetProductsQuery(apiParams.toString());
  const products = data?.data || [];
  const { totalPages, currentPage } = data?.pagination || {
    totalPages: 1,
    currentPage: 1,
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams(prev => {
      prev.set('sortBy', e.target.value);
      prev.set('page', '1');

      return prev;
    });
  };

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams(prev => {
      prev.set('perPage', e.target.value);
      prev.set('page', '1');

      return prev;
    });
  };

  const pageRange = 4;
  const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const endPage = Math.min(totalPages, startPage + pageRange - 1);

  const handleClick = (page: number) => {
    setSearchParams(prev => {
      prev.set('page', page.toString());

      return prev;
    });
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
            <select
              className="productList__item-select"
              name="sort"
              id="sort"
              value={searchParams.get('sortType') || ''}
              onChange={handleSortChange}
            >
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
              value={searchParams.get('perPage') || ''}
              onChange={handlePerPageChange}
            >
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </div>
          <Search path={path} />
        </div>
      </div>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
      <div className="productList__buttons">
        <button
          className="productList__button productList__button-arrow"
          onClick={() => handleClick(currentPage - 1)}
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
          onClick={() => handleClick(currentPage + 1)}
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
