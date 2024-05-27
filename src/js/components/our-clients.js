import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function ourClients() {
  const swiper = new Swiper('.our-clients__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(2),
    grid: {
      rows: 1
    },
    speed: 1000,
    breakpoints: {
      769: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 0,
        grid: {
          rows: 2
        }
      }
    },
    pagination: {
        el: ".our-clients__swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="our-clients__swiper-pagination-num ' + className + '">' + (index + 1) + '</span>';
        },
      },
      navigation: {
        nextEl: '.our-clients__swiper-btn--next',
        prevEl: '.our-clients__swiper-btn--prev',
    },
  });
}

export default ourClients;
