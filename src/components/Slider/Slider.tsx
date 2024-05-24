/* eslint-disable react/jsx-key */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductCard } from '../ProductCard/ProductCard';
import './Slider.scss';
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3.5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5,
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
  return (
    <>
      <Carousel responsive={responsive}>
        {products.map(product => (
          <div className="item">
            <ProductCard width={212} key={product.id} {...product} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
