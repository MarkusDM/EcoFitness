import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function workingWith() {
  const mainSwipers = document.querySelectorAll('.working-with__main-swiper');
  const tabBtns = document.querySelectorAll('.working-with__tab');
  const contentBox = document.querySelectorAll('.working-with__swiper-wrapper-box');
  const svg = document.querySelectorAll('.svg-point');
  const imgBox = document.querySelectorAll('.working-with__img-box');
  const btnRotate = document.querySelector('.working-with__img-rotate-btn');

  function swiperBtnClick(swiper, swiperTextBox) {
    let activeSlideIndex = swiper.querySelector(`.swiper-slide-active`).dataset.index;
    let svgItem = document.getElementById(swiper.querySelector(`.swiper-slide-active`).dataset.svg);
    svg.forEach((item) => {
      item.classList.remove('active');
    });
    imgBox.forEach((item) => {
      item.classList.remove('active');
    });
    svgItem.classList.add('active');
    svgItem.closest('.working-with__img-box').classList.add('active');
    swiperTextBox.slideTo(activeSlideIndex);
  }

  tabBtns.forEach((item) => {
    item.addEventListener('click', () => {
      let name = item.dataset.tab;
      let content = document.querySelector(`.working-with__swiper-wrapper-box[data-content='${name}']`);
      let slides = content.querySelectorAll(`.working-with__main-swiper-slide`);
      let activeSlide = content.querySelector(`.swiper-slide-active`);

      tabBtns.forEach((item) => {
        item.classList.remove('active');
      });
      contentBox.forEach((item) => {
        item.classList.remove('active');
      });
      item.classList.add('active');
      content.classList.add('active');

      let svgTitle = activeSlide.dataset.svg;
      let svgItem = document.getElementById(svgTitle);

      svg.forEach((item) => {
        item.classList.remove('active');
      });
      imgBox.forEach((item) => {
        item.classList.remove('active');
      });
      svgItem.closest('.working-with__img-box').classList.add('active');
      svgItem.classList.add('active');

      slides.forEach((item) => {
        item.classList.remove('active');
      });
      activeSlide.classList.add('active');
    });
  });

  mainSwipers.forEach((swiper, i) => {
    const slides = swiper.querySelectorAll('.swiper-slide');
    const btnPrev = swiper.parentElement.querySelector('.working-with__swiper-btn--prev');
    const btnNext = swiper.parentElement.querySelector('.working-with__swiper-btn--next');
    const textSwiper = swiper.parentElement.nextElementSibling;

    const swiperMain = new Swiper(swiper, {
      slidesPerView: 2,
      slidesPerGroup: 1,
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },
      // spaceBetween: rem(2),
      allowTouchMove: false,
      speed: 1000,
      // loop: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3
        }
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev
      },
      on: {
        slideChange: function () {
          slides.forEach((slide) => slide.classList.remove('active'));
          const activeSlide = this.slides[this.activeIndex];
          activeSlide.classList.add('active');
        }
      }
    });

    const swiperTextBox = new Swiper(textSwiper, {
      slidesPerView: 1,
      autoHeight: true,
      effect: 'fade',
      allowTouchMove: false,
      // loop: true,
      fadeEffect: {
        crossFade: true
      },
      speed: 1000,
      breakpoints: {
        768: {}
      }
      // navigation: {
      //   nextEl: swiper.parentElement.querySelector('.working-with__swiper-btn--next'),
      //   prevEl: swiper.parentElement.querySelector('.working-with__swiper-btn--prev')
      // }
    });

    btnNext.addEventListener('click', () => {
      swiperBtnClick(swiper, swiperTextBox);
    });
    btnPrev.addEventListener('click', () => {
      swiperBtnClick(swiper, swiperTextBox);
    });

    slides.forEach((item, i) => {
      item.dataset.index = i;
      item.addEventListener('click', (e) => {
        let index = item.dataset.index;
        let svgTitle = item.dataset.svg;

        let svgItem = document.getElementById(svgTitle);

        svg.forEach((item) => {
          item.classList.remove('active');
        });
        imgBox.forEach((item) => {
          item.classList.remove('active');
        });
        svgItem.closest('.working-with__img-box').classList.add('active');
        svgItem.classList.add('active');

        // с разворотом
        // if (svgItem.closest('.working-with__img-box--back')) {
        //   document.querySelector('.working-with__img-wrapper').classList.add('active');
        // } else {
        //   document.querySelector('.working-with__img-wrapper').classList.remove('active');
        // }

        console.log(index);
        swiperMain.slideTo(index);
        swiperTextBox.slideTo(index);

        slides.forEach((item) => {
          item.classList.remove('active');
        });
        item.classList.add('active');
      });
    });

    // swiperMain.controller.control = swiperTextBox;
  });

  btnRotate.addEventListener('click', () => {
    imgBox.forEach((item) => {
      item.classList.toggle('active');
    });
  });

  const firstTab = document.querySelector(`.working-with__swiper-wrapper-box[data-content='structure']`);
  const firstTabBtn = document.querySelector(`.working-with__tab[data-tab='structure']`);
  const firstSlide = mainSwipers[0].querySelector(`.swiper-slide-active`);
  const firstSvg = document.getElementById(mainSwipers[0].querySelector(`.swiper-slide-active`).dataset.svg);
  const firstImg = firstSvg.closest('.working-with__img-box');

  firstTab.classList.add('active');
  firstTabBtn.classList.add('active');
  firstSlide.classList.add('active');
  firstSvg.classList.add('active');
  firstImg.classList.add('active');
}

export default workingWith;
