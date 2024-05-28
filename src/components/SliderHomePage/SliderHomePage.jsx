import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './SliderHomePage.scss';
// eslint-disable-next-line max-len
import bannerAccessories from '../../images/slidesHomePage/banner-accessories.png';
import bannerPhones from '../../images/slidesHomePage/banner-phones.png';
import bannerTablets from '../../images/slidesHomePage/banner-tablets.png';

const SliderHomePage = () => {
  const slides = [
    { image: bannerAccessories, alt: 'Accessories' },
    { image: bannerPhones, alt: 'Phones' },
    { image: bannerTablets, alt: 'Tablets' },
  ];
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="slider-container" {...handlers}>
      {slides.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={slide.image} alt={slide.alt} className="image" />
          )}
        </div>
      ))}
      <button className="prev-arrow" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-arrow" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderHomePage;
