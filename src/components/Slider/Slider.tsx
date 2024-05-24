/* eslint-disable no-console */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductCard } from '../ProductCard/ProductCard';
import './Slider.scss';
import { useEffect, useState } from 'react';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1199, min: 640 },
    items: 2.5,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1.3,
  },
};

const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
  {
    id: 32,
    name: 'Apple iPhone 14',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
  {
    id: 122,
    name: 'Apple iPhone',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
  {
    id: 11,
    name: 'Apple iPhone 14 Pro',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
  {
    id: 1,
    name: 'Apple iPhone 14 Pro',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
  {
    id: 32,
    name: 'Apple iPhone 14',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
  {
    id: 122,
    name: 'Apple iPhone',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
  {
    id: 11,
    name: 'Apple iPhone 14 Pro',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
  {
    id: 1,
    name: 'Apple iPhone 14 Pro',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
  {
    id: 32,
    name: 'Apple iPhone 14',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
  {
    id: 122,
    name: 'Apple iPhone',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
  {
    id: 11,
    name: 'Apple iPhone 14 Pro',
    price: 799,
    color: 'Silver',
    capacity: '128 GB',
    ram: '6 GB',
    image: '../../images/Product.png',
  },
];

const Slider = () => {
  const [cardWidth, setCardWidth] = useState(213);

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

  const handleGoToUpPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div>
        <Carousel responsive={responsive}>
          {products.map(product => (
            <div className="item" key={product.id} onClick={handleGoToUpPage}>
              <ProductCard width={cardWidth} {...product} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
