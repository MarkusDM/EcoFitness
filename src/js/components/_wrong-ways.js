import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function wrongWays() {
  const swiperMmainBanner = new Swiper('.wrong-ways__swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: 1000,
    spaceBetween: rem(2),
    breakpoints: {
      768: {
        slidesPerView: 3,
      }
    },
    navigation: {
        nextEl: '.wrong-ways__swiper-btn--next',
        prevEl: '.wrong-ways__swiper-btn--prev',
    },
  });
}

export default wrongWays;
