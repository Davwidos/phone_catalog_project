import { FC, useMemo } from 'react';
import { About } from '../About/About';
import { TechSpecs } from '../TechSpecs/TechSpecs';
import './ProductPage.scss';
import { ProductGallery } from '../ProductGallery';
import { VariantsSection } from '../VariantsSection';
import Slider from '../Slider/Slider';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { useAppSelector } from '../../app/hooks';
import {
  selectProduct,
  selectProducts,
} from '../../features/products/selectors';
import { useParams } from 'react-router-dom';
export const ProductPage: FC = () => {
  const { id } = useParams();
  const product = useAppSelector(state =>
    selectProduct(state, p => p.itemId === id),
  );
  const details = product?.item;

  const recomended = useAppSelector(selectProducts);

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
      <ProductGallery details={details} />
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
      <TechSpecs details={details} />

      <div className="ProductPage__slider">
        <h1 className="title-slider">You may also like</h1>
        <Slider products={recomended} />
      </div>
    </div>
  );
};
