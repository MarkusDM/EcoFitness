import Swiper from 'swiper';

import { rem } from '../utils/constants';

import '../components/_search';

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

  const ourSwiper = new Swiper('.our__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 8,

    navigation: {
      prevEl: '.our__swiper-btn--prev',
      nextEl: '.our__swiper-btn--next'
    }
  });

  const trainingSwiper = new Swiper('.training__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    autoHeight: true,

    breakpoints: {
      768: {
        slidesPerView: 2.3,
        spaceBetween: 20,
        autoHeight: false
      }
    },

    navigation: {
      prevEl: '.training__swiper-btn--prev',
      nextEl: '.training__swiper-btn--next'
    }
  });

  const subscriptionsSwiper = new Swiper('.subscriptions__swiper', {
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
            translate: [0, '-6rem', 0],
            scale: 0.9
          }
        }
      }
    },

    navigation: {
      prevEl: '.subscriptions__swiper-btn--prev',
      nextEl: '.subscriptions__swiper-btn--next'
    }
  });

  const ourAdvantagesSwiper = new Swiper('.our-advantages__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    allowTouchMove: true,
    spaceBetween: 16,

    breakpoints: {
      768: {
        slidesPerView: 4,
        allowTouchMove: false,
        spaceBetween: 20
      }
    },

    navigation: {
      prevEl: '.our-advantages__swiper-btn--prev',
      nextEl: '.our-advantages__swiper-btn--next'
    }
  });

  if (document.querySelector('.gym') && window.screen.width <= 768) {
    const container = document.querySelector('.gym__left-circle.mobile'),
      circles = container.querySelectorAll('.gym__left-circle--target');

    const gymSwiper = new Swiper('.gym__swiper', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      effect: 'fade',
      allowTouchMove: false,
      fadeEffect: {
        crossFade: true
      }
    });

    container.addEventListener('click', (e) => {
      let target = e.target,
        activeIndex = 0;

      if (
        target.tagName == 'path' &&
        target.previousElementSibling.classList.contains('gym__left-circle--target')
      ) {
        target = target.previousElementSibling;
      }

      if (target.classList.contains('gym__left-circle--target')) {
        circles.forEach((circle, i) => {
          circle == target && (activeIndex = i);

          circle.classList.remove('active');
        });

        target.classList.add('active');
        gymSwiper.slideTo(activeIndex);
      }
    });
  }

  const newSlider = new Swiper('.news__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,

    grid: {
      rows: 3,
      fill: 'row'
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      }
    },

    pagination: {
      el: '.news__swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="news__swiper-pagination-num ' + className + '">' + (index + 1) + '</span>';
      }
    },

    navigation: {
      nextEl: '.news__swiper-btn--next',
      prevEl: '.news__swiper-btn--prev'
    }
  });

  const moreNewsSlider = new Swiper('.more-news__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,

    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      }
    },

    navigation: {
      prevEl: window.screen.width > 768 ? '.more-news__swiper-prev' : '.more-news__swiper-btn--prev',
      nextEl: window.screen.width > 768 ? '.more-news__swiper-next' : '.more-news__swiper-btn--next'
    }
  });
};
