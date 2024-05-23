import { ShopByCategory } from '../Shop-by-category/Shop-by-category';
import SliderHomePage from '../SliderHomePage/SliderHomePage';
import './Homepage.scss';

export const Homepage = () => {
  return (
    <div className="main">
      <h1 className="main__title title">Welcome to Nice Gadgets store!</h1>
      <SliderHomePage />
      <div className="main__slider new-models">Brand new models</div>
      <ShopByCategory />
      <div className="main__hot-prices">HOT PRICES</div>
    </div>
  );
};
