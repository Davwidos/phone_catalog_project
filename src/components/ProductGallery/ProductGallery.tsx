import { FC } from 'react';

const images = [
  '/img/phones/apple-iphone-11-pro-max/gold/00.webp',
  '/img/phones/apple-iphone-11-pro-max/gold/01.webp',
  '/img/phones/apple-iphone-11-pro-max/gold/02.webp',
];

export const ProductGallery: FC = () => {
  return images.map(src => <img key={src} src={src} />);
};
