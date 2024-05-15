import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';
function specialists() {


  const swiperMmainBanner = new Swiper('.specialists__swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: rem(2),
    allowTouchMove: true,
    speed: 1000,

    breakpoints: {
      768: {
        slidesPerView: 2,
        direction: 'vertical',
        spaceBetween: rem(2),
        allowTouchMove: false,
      }
    },
    navigation: {
        nextEl: '.specialists__swiper-btn--next',
        prevEl: '.specialists__swiper-btn--prev',
    },
  });

}

export default specialists;