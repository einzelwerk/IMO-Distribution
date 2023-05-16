// eslint-disable-next-line
import Swiper, { Mousewheel, Pagination, Navigation, EffectFade, Scrollbar } from 'swiper';
// eslint-disable-next-line
import 'swiper/css';
// eslint-disable-next-line
import 'swiper/css/navigation';
// eslint-disable-next-line
import 'swiper/css/scrollbar';

const breakpoints = {
  isMobile: `(max-width:768px)`,
  isDesktop: `(min-width:769px)`,
};
export default breakpoints;

class Sliders {
  static partners() {
    const root = document.querySelector('.js-partners-slider');
    if (root) {
      const sliderInstance = new Swiper(root as HTMLElement, {
        modules: [Mousewheel, Navigation],
        init: false,

        navigation: {
          disabledClass: 'swiper-button-disabled',
          prevEl: document.querySelector('.p-prev-el') as HTMLElement,
          nextEl: document.querySelector('.p-next-el') as HTMLElement,
        },
        slidesPerView: 2,
        spaceBetween: 10,
        mousewheel: {
          forceToAxis: true,
          sensitivity: 0.3,
        },

        breakpoints: {
          768: {
            slidesPerView: 4,
          },
        },
      });

      sliderInstance.init();
    }
  }

  static info() {
    const root = document.querySelector('.js-info-slider');
    if (root) {
      const sliderInstance = new Swiper(root as HTMLElement, {
        modules: [Mousewheel, Navigation, EffectFade],
        init: false,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          prevEl: document.querySelector('.js-i-prev-el') as HTMLElement,
          nextEl: document.querySelector('.js-i-next-el') as HTMLElement,
        },
        slidesPerView: 1,
        spaceBetween: 10,
        mousewheel: {
          forceToAxis: true,
          sensitivity: 0.3,
        },
      });

      sliderInstance.init();
    }
  }

  static team() {
    const root = document.querySelector('.js-team-slider');
    if (root) {
      const sliderInstance = new Swiper(root as HTMLElement, {
        modules: [Mousewheel, Navigation, EffectFade, Scrollbar],
        init: false,
 
        scrollbar: {
          el: root.querySelector('.swiper-scrollbar') as HTMLElement,
        },
     

        slidesPerView: 1,
        spaceBetween: 10,
        mousewheel: {
          forceToAxis: true,
          sensitivity: 0.3,
        },
      });

      if (window.matchMedia(breakpoints.isMobile).matches) {
        sliderInstance.init();
      }
    }
  }
}
function slidersInit() {
  Sliders.partners();
  Sliders.info();
  Sliders.team();
}

window.addEventListener('load', () => {
  slidersInit();
});

window.addEventListener('resize', () => {
  setTimeout(() => {
    slidersInit();
  }, 1000);
});
