/* eslint-disable no-console */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductCard } from '../ProductCard/ProductCard';
import './Slider.scss';
import { useEffect, useState } from 'react';
import { useProducts } from '../../provider/ProductsProvider';

interface ArrowProps {
  onClick?: () => void;
}

const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow custom-arrow--left"
    ></button>
  );
};

const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow custom-arrow--right"
    ></button>
  );
};

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

const Slider = () => {
  const [cardWidth, setCardWidth] = useState(213);
  const { products } = useProducts();

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
      <div>
        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {products.map(product => (
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
