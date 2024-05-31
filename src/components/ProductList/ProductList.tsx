import React, { useState, useEffect, useMemo } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useProducts } from '../../provider/ProductsProvider';
import leftArrow from '../../icons/leftArrow.svg';
import rightArrow from '../../icons/rightArrow.svg';
import { Product } from '../../types/Product';
import { Search } from '../Search/Search';

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
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [sortType, setSortType] = useState('newest');
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    let order = 'asc';

    if (value.includes('high') || value === 'newest') {
      order = 'desc';
    }

    setSortType(value);
    setSortOrder(order);
  };

  const sortProducts = (
    productsToSort: Product[],
    sortBy: string,
    order: string,
  ) => {
    const sortedProducts = [...productsToSort];

    sortedProducts.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case 'price-low':
        case 'price-high':
          aValue = a.price;
          bValue = b.price;
          break;

        case 'newest':
        case 'oldest':
          aValue = a.year;
          bValue = b.year;
          break;

        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (order === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return sortedProducts;
  };

  const sortedProducts = sortProducts(products, sortType, sortOrder);

  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const searchTerms = searchQuery.split(' ').filter(term => term);

  const filteredProducts = useMemo(() => {
    return sortedProducts.filter(product =>
      searchTerms.every(term => product.name.toLowerCase().includes(term)),
    );
  }, [sortedProducts, searchTerms]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const pageRange = 4;
  const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  const endPage = Math.min(totalPages, startPage + pageRange - 1);

  const handleClick = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [sortType, sortOrder, itemsPerPage, searchParams]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPages]);

  return (
    <div className="container">
      <Breadcrumbs path={path} />
      <Search path={path} />
      <div className="productList">
        <div>
          <h1 className="productList__title">Mobile phones</h1>
          <span className="productList__title-info">95 models</span>
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
              value={sortType}
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
