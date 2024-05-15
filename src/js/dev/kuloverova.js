import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';


window.$ = window.jQuery = require('jquery');

import { rem } from '../utils/constants';
import { scroll } from '../utils/scroll';

import popup from '../utils/popup';
import form from '../utils/form';
import mainBanner from '../components/main-banner';
import result from '../components/result';
import specialists from '../components/specialists';


export const modules = {};
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    scroll();
  } catch {}
  try {
    mainBanner();
  } catch {}
  try {
    result();
  } catch {}
  try {
    specialists();
  } catch {}
});


