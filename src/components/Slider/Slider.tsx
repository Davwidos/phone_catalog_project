import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductCard } from '../ProductCard/ProductCard';
import './Slider.scss';
import { Product } from '../../types/Product';

interface CustomArrowProps {
  onClick: () => void;
  disabled?: boolean;
}

interface SliderProps {
  models: Product[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1199, min: 640 },
    items: 2.5,
  },
  mobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1.3,
  },
};

const CustomLeftArrow: React.FC<CustomArrowProps> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow custom-arrow--left"
      disabled={disabled}
    ></button>
  );
};

const CustomRightArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow custom-arrow--right"
    ></button>
  );
};

const Slider = ({ models }: SliderProps) => {
  const [cardWidth, setCardWidth] = useState(213);
  const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState(true);

  useEffect(() => {
    const updateCardWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 320 && screenWidth <= 639) {
        setCardWidth(212);
      } else if (screenWidth >= 640 && screenWidth <= 1199) {
        setCardWidth(237);
      } else if (screenWidth >= 1200) {
        setCardWidth(272);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);

    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  return (
    <>
      <div className="carousel">
        <Carousel
          responsive={responsive}
          customLeftArrow={
            <CustomLeftArrow
              onClick={() => setIsLeftArrowDisabled(false)}
              disabled={isLeftArrowDisabled}
            />
          }
          customRightArrow={
            <CustomRightArrow onClick={() => setIsLeftArrowDisabled(true)} />
          }
          renderArrowsWhenDisabled={true}
        >
          {models.map(product => (
            <div className="item" key={product.id}>
              <ProductCard width={cardWidth} product={product} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
