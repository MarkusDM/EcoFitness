import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function courseBanner() {
    const thumbSlides = document.querySelectorAll('.course-banner__thumb-inner');

    const swiperMmainBanner = new Swiper('.course-banner__swiper', {
      slidesPerView: 1,
      effect: 'fade',
      allowTouchMove: false,
      autoplay: {
        delay: 120000,
        disableOnInteraction: false
      },
      loop: true,
      fadeEffect: {
        crossFade: true
      },
      speed: 1000,
      autoHeight: true,
      breakpoints: {
        768: {
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          }
        }
      },
      initialSlide: 1,
      on: {
        slideChangeTransitionStart: function () {
          const activeSlide = this.slides[this.activeIndex].dataset.index;
          thumbSlides.forEach((item) => item.classList.remove('active'));
          thumbSlides[activeSlide].classList.add('active');
        }
      }
    });
  
    // Добавляем обработчик событий клика на каждый слайд
    thumbSlides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        // Обновляем активный слайд с помощью метода Swiper (предполагается, что у вас есть переменная swiper, содержащая экземпляр Swiper)
        swiperMmainBanner.slideTo(index); // Это изменит активный слайд на слайд с индексом index
        thumbSlides.forEach((item) => item.classList.remove('active'));
        slide.classList.add('active');
      });
    });
 
}

export default courseBanner;