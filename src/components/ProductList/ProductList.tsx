import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';

export const ProductList: React.FC = () => {
  return (
    <div className="container">
      <ProductCard width={212} />
      <ProductCard width={212} />
      <ProductCard width={212} />
      <ProductCard width={212} />
      <ProductCard width={212} />
      <ProductCard width={212} />
      <ProductCard width={212} />
    </div>
  );
};
