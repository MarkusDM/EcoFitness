import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function coaches() {
  const swiper = new Swiper('.coaches__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(2),
    grid: {
      rows: 1
    },
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 0,
        grid: {
          rows: 3
        }
      }
    },
    pagination: {
        el: ".coaches__swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="coaches__swiper-pagination-num ' + className + '">' + (index + 1) + '</span>';
        },
      },
      navigation: {
        nextEl: '.coaches__swiper-btn--next',
        prevEl: '.coaches__swiper-btn--prev',
    },
  });
}

export default coaches;
