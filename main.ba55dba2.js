parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=document.querySelectorAll(".btn-support,.support__btn");console.log(i);var c="Przekazanie 1% podatku, nr KRS 0000154454, w celu szczegółowym wpisując Schronisko w Mysłowicach\nlub przekazanie darowizny na nasz rachunek bankowy:\n39 1020 2313 0000 3102 0121 3677\nlub\n63 1020 2528 0000 0702 0498 9523\nPrzekazanie darowizny w schronisku\n";e(i).forEach(function(e){return e.onclick=function(){return alert(c)}}),window.addEventListener("load",function(){document.body.setAttribute("style","overflow:hidden;"),document.querySelector(".loader-wrapper").className+=" loaded",setTimeout(function(){document.body.setAttribute("style","overflow:visible;")},2e3)});var u=document.querySelector(".menu-burger"),s=document.querySelector(".menu-overlay");u.onclick=function(){this.classList.toggle("btn--clicked"),this.setAttribute("aria-expanded",this.classList.contains("opened")),s.classList.toggle("burger--active"),document.body.classList.toggle("ban-overflow")};
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.ba55dba2.js.map