import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();
});

const Swipers = () => {
  const partnersSwiper = new Swiper('.partners__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: 'creative',

    creativeEffect: {
      limitProgress: 1,
      perspective: true,
      progressMultiplier: 1,

      next: {
        translate: [0, '-11rem', 0],
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
            translate: [0, '-11rem', 0],
            scale: 0.9
          }
        }
      }
    },

    navigation: {
      prevEl: '.partners__swiper-prev',
      nextEl: '.partners__swiper-next'
    }
  });
};
