// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn",
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

// Place any jQuery/helper plugins in here.

// import Swiper JS
import Swiper from "../node_modules/swiper/swiper-bundle";
import SwiperCore, { Navigation } from "../node_modules/swiper/core";
import "../node_modules/swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 2000,
  slidesPerView: 3,
  spaceBetween: 25,

  // Navigation arrows
  navigation: {
    nextEl: "navigation-next",
    prevEl: "navigation-prev",
  },

  autoplay: {
    delay: 2000,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 992px
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
