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
  selectProductByItemId,
  selectRecomended,
} from '../../features/products/selectors';
import { useParams } from 'react-router-dom';
export const ProductPage: FC = () => {
  const { id } = useParams();
  const product = useAppSelector(state =>
    selectProductByItemId(state, id || ''),
  );
  const details = product?.item;

  const recomended = useAppSelector(state =>
    selectRecomended(state, details?.namespaceId || ''),
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

      <div className="middle">
        <div className="middle-1">
          <ProductGallery details={details} />
        </div>
        <div className="middle-2">
          <VariantsSection product={product} />
        </div>
      </div>

      <div className="info">
        <div className="info-1">
          <About details={details} />
        </div>
        <div className="info-2">
          <TechSpecs details={details} />
        </div>
      </div>

      <div className="ProductPage__slider">
        <h1 className="title-slider">You may also like</h1>
        <Slider models={recomended} />
      </div>
    </div>
  );
};
