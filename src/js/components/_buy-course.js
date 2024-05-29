import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function buyCourse() {
  const swiperMmainBanner = new Swiper('.buy-course__swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    // autoHeight: true,
    speed: 1000,
    spaceBetween: rem(2.5),
    breakpoints: {
      768: {
        slidesPerView: 3,
        // autoHeight: false
      }
    },
    navigation: {
      nextEl: '.buy-course__swiper-btn--next',
      prevEl: '.buy-course__swiper-btn--prev'
    }
  });
}

export default buyCourse;
