import { useProducts } from '../../provider/ProductsProvider';
import { ShopByCategory } from '../Shop-by-category/Shop-by-category';
import Slider from '../Slider/Slider';
import SliderHomePage from '../SliderHomePage/SliderHomePage';
import './Homepage.scss';

export const Homepage = () => {
  const { newModels, hotPricesModels } = useProducts();

  return (
    <div className="main">
      <h1 className="main__title title">Welcome to Nice Gadgets store!</h1>
      <div className="main__slider slider"></div>
      <SliderHomePage />
      <div className="main__slider new-models">
        <h1 className="secondary-title">Brand new models</h1>
        <Slider models={newModels} />
      </div>
      <ShopByCategory />
      <div className="main__hot-prices">
        <h1 className="secondary-title">Hot prices</h1>
        <Slider models={hotPricesModels} />
      </div>
    </div>
  );
};
