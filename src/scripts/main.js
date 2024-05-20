document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.querySelector('.footer__scrollup');
  const hoverImage = document.querySelector('.slider-icon');

  const originalImageUrl = hoverImage.src;
  const hoverImageUrl = '../images/slider-button-up_hover.svg';

  imageContainer.addEventListener('mouseenter', function () {
    hoverImage.src = hoverImageUrl;
  });

  imageContainer.addEventListener('mouseleave', function () {
    hoverImage.src = originalImageUrl;
  });
});
