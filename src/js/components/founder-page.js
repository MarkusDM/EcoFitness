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