import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function courseHelp() {
  const swiperMmainBanner = new Swiper('.course-help__swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    autoHeight: true,
    speed: 1000,
    spaceBetween: rem(2),
    breakpoints: {
      768: {
        slidesPerView: 3,
        autoHeight: false
      }
    },
    navigation: {
      nextEl: '.course-help__swiper-btn--next',
      prevEl: '.course-help__swiper-btn--prev'
    }
  });
}

export default courseHelp;
