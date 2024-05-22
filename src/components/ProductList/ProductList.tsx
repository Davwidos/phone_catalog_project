import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';

export const ProductList: React.FC = () => {
  const phones = Array(10)
    .fill(1)
    .map((_el, index) => ({
      id: index,
      price: index * 100,
    }));
  return (
    <div className="container">
      {phones.map(phone => (
        <ProductCard id={phone.id} key={phone.id} price={phone.price} />
      ))}
    </div>
  );
};
