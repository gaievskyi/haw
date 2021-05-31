"use strict";

window.addEventListener("load", () => {
  document.body.setAttribute("style", "overflow:hidden;");
  const loader = document.querySelector(".loader-wrapper");
  loader.className += " loaded";
  setTimeout(function () {
    document.body.setAttribute("style", "overflow:visible;");
  }, 2000);
});

const burgerBtn = document.querySelector(".menu-burger");
const burgerInner = document.querySelector(".menu-overlay");

burgerBtn.onclick = function () {
  this.classList.toggle("btn--clicked");
  this.setAttribute("aria-expanded", this.classList.contains("opened"));
  burgerInner.classList.toggle("burger--active");
  document.body.classList.toggle("ban-overflow");
};
