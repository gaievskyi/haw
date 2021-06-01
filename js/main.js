"use strict";

const becomeFamilyBttns = document.querySelectorAll(
  ".btn-support,.support__btn"
);
console.log(becomeFamilyBttns);

const msg =
  "Przekazanie 1% podatku, nr KRS 0000154454, w celu szczegółowym wpisując Schronisko w Mysłowicach\n" +
  "lub przekazanie darowizny na nasz rachunek bankowy:\n" +
  "39 1020 2313 0000 3102 0121 3677\n" +
  "lub\n" +
  "63 1020 2528 0000 0702 0498 9523\n" +
  "Przekazanie darowizny w schronisku\n";

[...becomeFamilyBttns].forEach((btn) => (btn.onclick = () => alert(msg)));

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
