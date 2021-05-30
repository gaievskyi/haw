"use strict";

const burgerBtn = document.querySelector(".menu-burger");
const burgerInner = document.querySelector(".menu-overlay");

burgerBtn.onclick = function () {
  this.classList.toggle("btn--clicked");
  this.setAttribute("aria-expanded", this.classList.contains("opened"));
  burgerInner.classList.toggle("burger--active");
  document.body.classList.toggle("ban-overflow");
};