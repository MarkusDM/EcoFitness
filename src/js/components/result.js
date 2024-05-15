import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function result() {


  const swiperMmainBanner = new Swiper('.result__swiper', {
    slidesPerView: 1,
    effect: 'fade',
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    breakpoints: {
      768: {
      }
    },
    navigation: {
        nextEl: '.result__swiper-btn--next',
        prevEl: '.result__swiper-btn--prev',
    },
  });

}

export default result;