import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';
import home from '../../icons/Home.svg';
import vector from '../../icons/Vector.svg';
import { NavLink } from 'react-router-dom';

export const ProductList: React.FC = () => {
  return (
    <div className="container">
      <div className="productList">
        <NavLink className="productList__icon" to={'/'}>
          <img className="productList__icon-home" src={home} alt="home" />
        </NavLink>
        <img className="productList__icon" src={vector} alt="right arrow" />
        <span className="productList__text">Phones</span>
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
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </div>
      </div>

      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

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
