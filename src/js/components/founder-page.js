import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const diplomas__swiper = new Swiper('.diplomas__swiper', {
    slidesPerView: 1,
    speed: 1000,
    navigation: {
        nextEl: '.diplomas__swiper-btn--next',
        prevEl: '.diplomas__swiper-btn--prev',
    },
});

const founder_pattern__slide = new Swiper('.founder-pattern__swiper', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    navigation: {
        nextEl: '.founder-pattern__swiper-btn--next',
        prevEl: '.founder-pattern__swiper-btn--prev',
    },
});

const partnersSwiper = new Swiper('.founder-tv__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: 'creative',

    creativeEffect: {
      limitProgress: 1,
      perspective: true,
      progressMultiplier: 1,

      next: {
        translate: [0, '-6rem', 0],
        scale: 0.9,
        shadow: true
      },

      prev: {
        translate: [0, '200%', 0],
        // rotate: [10, 0, 0],
        opacity: 0
      }
    },

    breakpoints: {
      768: {
        creativeEffect: {
          limitProgress: 3,

          next: {
            translate: [0, '-5rem', 0],
            scale: 0.9
          }
        }
      }
    },

    navigation: {
      prevEl: '.founder-tv__swiper-prev',
      nextEl: '.founder-tv__swiper-next'
    }
});