import './style.scss';
import './src/js/preloader.js';
import './src/js/nav-menu.js';
import './src/js/typed.js';
import { closeLoader, loader } from './src/js/preloader.js';
import { menuAnimation } from './src/js/header.js';
import { homeAnimaton } from './src/js/home.js';

const init = () => {
  menuAnimation.play();
  homeAnimaton.play();
};


document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.pause();
      closeLoader.play();
      init();
    }, 1000);
  });
});
