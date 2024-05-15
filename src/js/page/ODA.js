import $ from "jquery";
import Swiper from 'swiper';
import {
	Pagination,
	Navigation
} from "swiper/modules";
import { rem } from '../utils/constants';

const ODA_why__swiper = new Swiper('.ODA-why__swiper', {
	slidesPerView: 1,
	spaceBetween: rem(2),
    navigation: {
        nextEl: '.ODA-why__swiper-nav--next',
        prevEl: '.ODA-why__swiper-nav--prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
        },
    },
});