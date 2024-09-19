import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function workingWith() {
  const mainSwipers = document.querySelectorAll('.working-with__main-swiper');
  const tabBtns = document.querySelectorAll('.working-with__tab');
  const contentBox = document.querySelectorAll('.working-with__swiper-wrapper-box');
  const videoWrapperBlocks = document.querySelectorAll('.working-with__img-wrapper-block'); // Родители видео блоков

  // Функция для сброса активных классов у всех слайдов
  function resetSlideActiveClass(swiperContainer) {
    const slides = swiperContainer.querySelectorAll('.swiper-slide');
    slides.forEach((slide) => slide.classList.remove('active'));
  }

  // Функция для добавления класса active к первому слайду при загрузке
  function activateFirstSlide(swiperContainer) {
    const firstSlide = swiperContainer.querySelector('.swiper-slide');
    if (firstSlide) {
      firstSlide.classList.add('active');
    }
  }

  // Функция для сброса активных классов у всех видео-блоков
  function resetAllVideoBlocks() {
    const allVideoBlocks = document.querySelectorAll('.working-with__img-wrapper-block-video');
    allVideoBlocks.forEach((block) => block.classList.remove('active'));
  }

  // Функция для обновления активного видео-блока в зависимости от активного слайда и активного таба
  function updateVideoBlock(activeIndex, activeTab) {
    resetAllVideoBlocks(); // Сбрасываем все активные видео-блоки

    // Находим активный блок с видео по активному табу
    const activeVideoWrapper = document.querySelector(`.working-with__img-wrapper-block[data-block="${activeTab}"]`);
    if (!activeVideoWrapper) return;

    const videoBlocks = activeVideoWrapper.querySelectorAll('.working-with__img-wrapper-block-video');
    videoBlocks.forEach((block) => block.classList.remove('active'));

    const activeVideoBlock = videoBlocks[activeIndex];
    if (activeVideoBlock) {
      activeVideoBlock.classList.add('active');
    }
  }

  // Функция для обновления видимых блоков в зависимости от выбранного таба
  function updateContent(activeTab) {
    // Деактивируем все блоки контента
    contentBox.forEach((box) => box.classList.remove('active'));
    // Активируем соответствующий контент-блок
    const targetContentBox = document.querySelector(`.working-with__swiper-wrapper-box[data-content="${activeTab}"]`);
    if (targetContentBox) {
      targetContentBox.classList.add('active');
    }

    // Деактивируем все блоки с видео
    videoWrapperBlocks.forEach((wrapper) => wrapper.classList.remove('active'));
    // Активируем соответствующий блок с видео
    const targetVideoWrapperBlock = document.querySelector(`.working-with__img-wrapper-block[data-block="${activeTab}"]`);
    if (targetVideoWrapperBlock) {
      targetVideoWrapperBlock.classList.add('active');
    }

    // Сбрасываем все видео-блоки и активируем первый блок
    resetAllVideoBlocks(); // Сбрасываем все активные блоки
    const firstVideoBlock = targetVideoWrapperBlock.querySelector('.working-with__img-wrapper-block-video');
    if (firstVideoBlock) {
      firstVideoBlock.classList.add('active');
    }
  }

  // Инициализация Swiper для каждого слайдера
  mainSwipers.forEach((swiperContainer, i) => {
    const slides = swiperContainer.querySelectorAll('.swiper-slide');
    const btnPrev = swiperContainer.parentElement.querySelector('.working-with__swiper-btn--prev');
    const btnNext = swiperContainer.parentElement.querySelector('.working-with__swiper-btn--next');
    
    // Находим соответствующий textSwiper внутри родительского блока
    const textSwiper = swiperContainer.closest('.working-with__swiper-wrapper-box').querySelector('.working-with__text-swiper');

    // Проверяем, что Swiper был найден
    if (!textSwiper) {
      console.error('Swiper-контейнер не найден');
      return;
    }

    // Инициализация основного слайдера Swiper
    const swiperMain = new Swiper(swiperContainer, {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: rem(3),
      speed: 1000,
      breakpoints: {
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      on: {
        slideChange: function () {
          const activeIndex = this.activeIndex;
          const activeTab = document.querySelector('.working-with__tab.active').dataset.tab;

          // Сбрасываем классы active на всех слайдах и добавляем активный
          resetSlideActiveClass(swiperContainer);
          slides[activeIndex].classList.add('active');

          updateVideoBlock(activeIndex, activeTab); // Обновляем активный видео-блок для текущего таба
        },
      },
    });

    // Инициализация текстового Swiper
    const textSwiperInstance = new Swiper(textSwiper, {
      slidesPerView: 1,
      autoHeight: true,
      effect: 'fade',
      allowTouchMove: false,
      fadeEffect: {
        crossFade: true,
      },
      speed: 1000,
    });

    // Добавление кликов на слайды
    slides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        swiperMain.slideTo(index);
        textSwiperInstance.slideTo(index);
        const activeTab = document.querySelector('.working-with__tab.active').dataset.tab;

        // Сбрасываем классы active на всех слайдах и добавляем активный
        resetSlideActiveClass(swiperContainer);
        slide.classList.add('active');

        updateVideoBlock(index, activeTab); // Обновляем активный видео-блок при клике для текущего таба
      });
    });

    // Активируем первый слайд при инициализации
    activateFirstSlide(swiperContainer);
  });

  // Включаем переключение табов
  tabBtns.forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      const targetTab = tabBtn.dataset.tab;

      // Деактивируем все табы
      tabBtns.forEach(btn => btn.classList.remove('active'));

      // Активируем выбранный таб
      tabBtn.classList.add('active');

      // Обновляем соответствующий контент и видео блоки
      updateContent(targetTab);

      // Активируем первый слайд для нового таба
      const activeSwiper = document.querySelector('.working-with__main-swiper');
      if (activeSwiper) {
        resetSlideActiveClass(activeSwiper);
        activateFirstSlide(activeSwiper);
      }
    });
  });

  // По умолчанию активируем первый видео-блок и первый контент-блок
  updateContent('structure');
  updateVideoBlock(0, 'structure');
}

// Убедимся, что DOM полностью загружен перед инициализацией
document.addEventListener('DOMContentLoaded', () => {
  workingWith();
});

export default workingWith;
