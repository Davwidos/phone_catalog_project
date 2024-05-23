import { FC } from 'react';
import { About } from '../About/About';
import { TechSpecs } from '../TechSpecs/TechSpecs';
import './ProductPage.scss';

export const ProductPage: FC = () => {
  return (
    <div className="ProductPage">
      <h1 className="ProductPage__title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>
      <About />
      <TechSpecs />

      <div className="ProductPage__slider">slider</div>
    </div>
  );
};
