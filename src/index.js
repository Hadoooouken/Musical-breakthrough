import '../src/styles/normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.html'
import './styles/main.scss'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.slider-teacher', {
  slidesPerView: 2,
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});



const button = document.querySelector('.accordion__button');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  
  const panel = document.querySelector('.accordion__panel');
  if (panel.style.maxHeight) {
    console.log(panel.style.maxHeight)
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  }
});

// const bannerButton = document.querySelector('.banner__button')
// console.log(bannerButton)
// const modal = document.querySelector('.popup')
// console.log(modal)

console.log(2 && 1 && null && 0 && undefined)