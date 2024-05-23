import { FC } from 'react';
import { About } from '../About/About';
import { TechSpecs } from '../TechSpecs/TechSpecs';
import './ProductPage.scss';
import { ProductGallery } from '../ProductGallery';
import { VariantsSection } from '../VariantsSection';

export const ProductPage: FC = () => {
  return (
    <div className="ProductPage">
      <h1 className="ProductPage__title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>
      <ProductGallery />
      <VariantsSection />
      <div className="ProdctPage__short-specs short-specs">
        <div className="short-specs__spec">
          <p className="short-specs__title">Screen</p>
          <p className="short-specs__value">6.5” OLED</p>
        </div>
        <div className="short-specs__spec">
          <p className="short-specs__title">Screen</p>
          <p className="short-specs__value">6.5” OLED</p>
        </div>
        <div className="short-specs__spec">
          <p className="short-specs__title">Screen</p>
          <p className="short-specs__value">6.5” OLED</p>
        </div>
      </div>
      <About />
      <TechSpecs />

      <div className="ProductPage__slider">slider</div>
    </div>
  );
};
