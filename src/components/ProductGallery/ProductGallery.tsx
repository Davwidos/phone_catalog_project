import { FC, TouchEvent, useState } from 'react';
import './ProductGallery.scss';
import classNames from 'classnames';
import { ProductDetails } from '../../types/ProductDetails';

interface Props {
  details?: ProductDetails;
}

export const ProductGallery: FC<Props> = ({ details }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const images = details?.images || [];

  const handleTouchStart = (e: TouchEvent) => {
    e.preventDefault();

    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    e.preventDefault();

    const delta = e.changedTouches[0].clientX - touchStartX;

    if (delta < 0) {
      setMainImageIndex(prev => (prev + 1) % images.length);
    } else if (delta > 0) {
      setMainImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const handleSetImage = (index: number) => () => setMainImageIndex(index);

  return (
    <div className="Product)Gallery">
      <div
        className="ProductGallery__main-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[mainImageIndex]}
          className="product-img"
          alt="product photo"
        />
      </div>

      <div className="ProductGallery__selector selector">
        {images.map((src, i) => (
          <button
            className={classNames('selector__item', {
              active: i === mainImageIndex,
            })}
            key={src}
            onClick={handleSetImage(i)}
          >
            <img src={src} className="product-img" alt="product photo" />
          </button>
        ))}
      </div>
    </div>
  );
};
