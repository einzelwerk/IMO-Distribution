import Alpine from 'alpinejs';
import './Sliders.ts'


declare global {
  // eslint-disable-next-line
  interface Window {
    Alpine: unknown;
  }
}

window.Alpine = Alpine;

Alpine.start();


document.documentElement.style.setProperty('--header-height' , `${document.querySelector('header').offsetHeight}px`)