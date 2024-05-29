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
import founder from '../components/founder';
import workingWith from '../components/working-with';
import allService from '../components/all-service';
import resultsBanner from '../components/results-banner';
import ourClients from '../components/our-clients';
import coaches from '../components/coaches';
import advantages from '../components/_advantages';
import courseBanner from '../components/_course-banner';
import wrongWays from '../components/_wrong-ways';
import courseHelp from '../components/_course-help';
import buyCourse from '../components/_buy-course';
import geography from '../components/_geography';
import founderBanner from '../components/founder-banner';
import suitableCourse from '../components/suitable-course';

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
  try {
    founder();
  } catch {}
  try {
    workingWith();
  } catch {}
  try {
    allService();
  } catch {}
  try {
    resultsBanner();
  } catch {}
  try {
    ourClients();
  } catch {}
  try {
    coaches();
  } catch {}
  try {
    advantages();
  } catch {}
  try {
    courseBanner();
  } catch {}
  try {
    wrongWays();
  } catch {}
  try {
    courseHelp();
  } catch {}
  try {
    buyCourse();
  } catch {}
  try {
    geography();
  } catch {}
  try {
    founderBanner();
  } catch {}
  try {
    suitableCourse();
  } catch {}
});
