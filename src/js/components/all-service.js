import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function allService() {
  const tabBtns = document.querySelectorAll('.service-workout__tab');
  const contentBox = document.querySelectorAll('.service-workout__list');

  tabBtns.forEach((item) => {
    item.addEventListener('click', () => {
      let name = item.dataset.tab;
      let content = document.querySelector(`.service-workout__list[data-content='${name}']`);


      tabBtns.forEach((item) => {
        item.classList.remove('active');
      });
      contentBox.forEach((item) => {
        item.classList.remove('active');
      });
      item.classList.add('active');
      content.classList.add('active');

    });
  });


  //   const firstTab = document.querySelector(`.working-with__swiper-wrapper-box[data-content='structure']`);

  //   firstTab.classList.add('active');
}

export default allService;
