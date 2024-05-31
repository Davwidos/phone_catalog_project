import { FC, useMemo } from 'react';
import { About } from '../About/About';
import { TechSpecs } from '../TechSpecs/TechSpecs';
import './ProductPage.scss';
import { ProductGallery } from '../ProductGallery';
import { VariantsSection } from '../VariantsSection';
import Slider from '../Slider/Slider';
import { useProductDetails } from '../../provider/ProductDetailsProvider';
import { useProducts } from '../../provider/ProductsProvider';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
export const ProductPage: FC = () => {
  const { details } = useProductDetails();
  const { products, youMayAlsoLikeProducts } = useProducts();

  const product = useMemo(
    () => products.find(p => p.itemId === details?.id),
    [products, details],
  );

  const category = useMemo(() => {
    if (details?.category?.includes('phones')) {
      return 'Phones';
    }

    if (details?.category?.includes('tablets')) {
      return 'Tablets';
    }

    if (details?.category?.includes('accessories')) {
      return 'Accessories';
    }

    return undefined;
  }, [details]);

  return (
    <div className="ProductPage">
      {category && (
        <Breadcrumbs
          path={category as 'Phones' | 'Tablets' | 'Accessories'}
          productName={details?.name}
        />
      )}
      <h1 className="ProductPage__title">{details?.name}</h1>
      <ProductGallery />
      <VariantsSection product={product} />
      <div className="ProductPage__short-specs short-specs">
        <div className="short-specs__spec">
          <p className="short-specs__title">Screen</p>
          <p className="short-specs__value">{details?.screen}</p>
        </div>
        <div className="short-specs__spec">
          <p className="short-specs__title">Resolution</p>
          <p className="short-specs__value">{details?.resolution}</p>
        </div>
        <div className="short-specs__spec">
          <p className="short-specs__title">Processor</p>
          <p className="short-specs__value">{details?.processor}</p>
        </div>
        <div className="short-specs__spec">
          <p className="short-specs__title">RAM</p>
          <p className="short-specs__value">{details?.ram}</p>
        </div>
      </div>
      <About />
      <TechSpecs />

      <div className="ProductPage__slider">
        <h1 className="title-slider">You may also like</h1>
        <Slider models={youMayAlsoLikeProducts} />
      </div>
    </div>
  );
};
