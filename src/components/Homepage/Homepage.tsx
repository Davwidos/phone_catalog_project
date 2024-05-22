export const Homepage = () => {
  return (
    <div className="main">
      <h1 className="main__title title">Welcome to Nice Gadgets store!</h1>

      <div className="main__slider slider">slider</div>

      <div className="main__slider new-models">Brand new models</div>

      <div className="main__shop-by-category shop-by-category">
        <div className="product-category">
          <img className="product-category__image" src="" alt="mobile-phones" />

          <p className="product-category__category">Mobile phones</p>
          <p className="product-category__models">95 models</p>
        </div>
        <div className="product-category">
          <img className="product-category__image" src="" alt="tablets" />

          <p className="product-category__category">Tablets</p>
          <p className="product-category__models">24 models</p>
        </div>
        <div className="product-category">
          <img className="product-category__image" src="" alt="accessories" />

          <p className="product-category__category">Accessories</p>
          <p className="product-category__models">100 models</p>
        </div>
      </div>

      <div className="main__hot-prices">HOT PRICES</div>
    </div>
  );
};
