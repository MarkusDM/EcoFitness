import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function geography() {
  const partnersSwiper = new Swiper('.geography__swiper', {
    slidesPerView: 1,
    direction: 'vertical',
    slidesPerGroup: 1,
    effect: 'creative',
    speed: 800,

    creativeEffect: {
      limitProgress: 1,
      perspective: true,
      progressMultiplier: 1,

      next: {
        translate: [0, '-14rem', 0],
        scale: 0.9,
        shadow: false,
      },

      prev: {
        translate: [0, '100%', 0],
        // rotate: [10, 0, 0],
        // opacity: 0
        shadow: false,
      }
    },

    breakpoints: {
      768: {
        allowTouchMove: false,
        creativeEffect: {
          limitProgress: 2,
          progressMultiplier: 1,
          next: {
            translate: [0, '-6.5rem', 0],
            scale: 0.9,
      
          },
          prev: {
 
          }
        }
      }
    },

    navigation: {
      prevEl: '.geography__swiper-btn--prev',
      nextEl: '.geography__swiper-btn--next'
    }
  });
}

export default geography;
