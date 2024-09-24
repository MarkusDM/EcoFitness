import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function workingWith() {
  const mainSwipers = document.querySelectorAll('.working-with__main-swiper');
  const tabBtns = document.querySelectorAll('.working-with__tab');
  const contentBox = document.querySelectorAll('.working-with__swiper-wrapper-box');
  const videoWrapperBlocks = document.querySelectorAll('.working-with__img-wrapper-block'); // Родители видео блоков
  const staticBlocks = document.querySelectorAll('.working-with__img-wrapper-block-static');

  // Функция для сброса активных классов у всех слайдов
  function resetSlideActiveClass() {
    mainSwipers.forEach((swiperContainer) => {
      const slides = swiperContainer.querySelectorAll('.swiper-slide');
      slides.forEach((slide) => slide.classList.remove('active'));
    });
  }

  // Функция для сброса активных классов у всех видео-блоков
  function resetAllVideoBlocks() {
    const allVideoBlocks = document.querySelectorAll('.working-with__img-wrapper-block-video');
    allVideoBlocks.forEach((block) => {
      block.classList.remove('active');
      const video = block.querySelector('video');
      if (video) video.pause(); // Останавливаем видео, если оно было запущено
    });
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
      const video = activeVideoBlock.querySelector('video');
      if (video) video.play(); // Запускаем видео при активации
    }
  }

  // Функция для сброса класса active у всех статических блоков
  function resetStaticBlocks() {
    staticBlocks.forEach((block) => block.classList.remove('active'));
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

    // Деактивируем все блоки с видео (не активируем их при переключении вкладок)
    videoWrapperBlocks.forEach((wrapper) => wrapper.classList.remove('active'));

    // Активируем только статический блок (без видео)
    const targetVideoWrapperBlock = document.querySelector(`.working-with__img-wrapper-block[data-block="${activeTab}"]`);
    if (targetVideoWrapperBlock) {
      targetVideoWrapperBlock.classList.add('active');
    }

    // Возвращаем класс active для блока static при переключении вкладок
    resetStaticBlocks(); // Сбрасываем классы active со всех статических блоков
    const staticBlock = targetVideoWrapperBlock.querySelector('.working-with__img-wrapper-block-static');
    if (staticBlock) {
      staticBlock.classList.add('active'); // Только статический блок получает класс active
    }

    // Сбрасываем все активные классы слайдов при переключении вкладки
    resetSlideActiveClass();
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

          resetSlideActiveClass(); // Сбрасываем классы active на всех слайдах
          slides[activeIndex].classList.add('active'); // Добавляем активный класс текущему слайду
          updateVideoBlock(activeIndex, activeTab); // Обновляем активный видео-блок для текущего таба

          // Удаляем класс active у блока static при смене слайда
          resetStaticBlocks();
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

        // Сбрасываем классы active на всех слайдах
        resetSlideActiveClass();
        slide.classList.add('active');

        // Убираем класс active с блока static при клике на слайд
        resetStaticBlocks();

        updateVideoBlock(index, activeTab); // Обновляем активный видео-блок при клике для текущего таба
      });
    });
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

      // Сбрасываем все активные классы у слайдов
      resetSlideActiveClass();
    });
  });

  // Устанавливаем начальное состояние
  const initialActiveBlock = document.querySelector('.working-with__img-wrapper-block');
  if (initialActiveBlock) {
    initialActiveBlock.classList.add('active');
  }
  if (staticBlocks) {
    staticBlocks.forEach(staticBlock => {
      staticBlock.classList.add('active');
    });
  }

  // Устанавливаем класс active первому блоку swiper-wrapper-box при загрузке страницы
  const firstContentBox = document.querySelector('.working-with__swiper-wrapper-box');
  if (firstContentBox) {
    firstContentBox.classList.add('active');
  }
}

// Убедимся, что DOM полностью загружен перед инициализацией
document.addEventListener('DOMContentLoaded', () => {
  workingWith();
});

export default workingWith;
