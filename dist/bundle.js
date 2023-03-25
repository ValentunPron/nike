/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/moduls/burger.js":
/*!*****************************!*\
  !*** ./js/moduls/burger.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst burger = () => {\r\n\tconst header = document.querySelector('.header'),\r\n\t  headerBurger = document.querySelector('.header__burger');\r\n\r\n\theaderBurger.addEventListener('click', (event) => {\r\n\t\tevent.preventDefault();\r\n\t\theader.classList.toggle('active');\r\n\t});\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\r\n\n\n//# sourceURL=webpack://nike/./js/moduls/burger.js?");

/***/ }),

/***/ "./js/moduls/dialog.js":
/*!*****************************!*\
  !*** ./js/moduls/dialog.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst email = (templateParams) => {\r\n\t(function(){\r\n\t\temailjs.init(\"ovMXZVwdfqTP4zKxm\");\r\n\t})();\r\n\t\r\n\temailjs.send('service_0tbqnna', 'template_bxkcbju', templateParams)\r\n\t.then(function(response) {\r\n\t   console.log('SUCCESS!', response.status, response.text);\r\n\t   document.querySelector('.wrapperDialog').classList.remove('active');\r\n\t   document.body.classList.remove('lock');\r\n\t}, function(error) {\r\n\t   console.log('FAILED...', error);\r\n\t   alert('Виникла помилка =(')\r\n\t});\r\n\t\r\n}\r\nconst dialog = () => {\r\n\tdocument.querySelector('#sub').addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\t\tdocument.body.classList.add('lock')\r\n\r\n\t\tdocument.querySelector('.wrapperDialog').innerHTML = `\r\n\t\t<div class=\"dialog\">\r\n\t\t\t<h3 class=\"dialog__title title\">WE WILL CONTACT YOU ASAP!</h3>\r\n\t\t\t<form action=\"#\" class=\"dialog__form\">\r\n\t\t\t\t<input required placeholder=\"Name\" type=\"text\" id=\"form_name\" name=\"name\" class=\"dialog__input\">\r\n\t\t\t\t<input required placeholder=\"Email\" type=\"email\" id=\"form_email\" name=\"email\" class=\"dialog__input\">\r\n\t\t\t\t<button class=\"dialog__button button\" id=\"submit_form\">SUBESCRIBE</button>\r\n\t\t\t</form>\r\n\t\t\t<button class=\"close\">X</button>\r\n\t\t</div>\r\n\t\t`\r\n\r\n\t\tdocument.querySelector('.close').addEventListener('click', () => {\r\n\t\t\tdocument.querySelector('.wrapperDialog').classList.remove('active');\r\n\t\t\tdocument.body.classList.remove('lock');\r\n\t\t})\r\n\t\tdocument.querySelector('.wrapperDialog').classList.add('active');\r\n\r\n\t\tdocument.querySelector('#submit_form').addEventListener('click', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tconst templateParams = {\r\n\t\t\t\tfrom_name: document.querySelector('#form_name').value,\r\n\t\t\t\tfrom_email: document.querySelector('#form_email').value\r\n\t\t\t}\r\n\t\t\temail(templateParams);\r\n\t\t})\r\n\t})\r\n\r\n\tdocument.querySelectorAll('.button').forEach(item => {\r\n\t\tif (item.id !== 'sub') {\r\n\t\t\titem.addEventListener('click', (e) => {\r\n\t\t\t\te.preventDefault();\r\n\t\t\t\tdocument.body.classList.add('lock')\r\n\t\t\r\n\t\t\t\tdocument.querySelector('.wrapperDialog').innerHTML = `\r\n\t\t\t\t<div class=\"dialog\">\r\n\t\t\t\t\t<h3 class=\"dialog__title title\">This is a demo layout so many features and buttons are not working</h3>\r\n\t\t\t\t\t<button class=\"dialog__button button close-button\">Close</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t`\r\n\t\t\r\n\t\t\t\tdocument.querySelector('.close-button').addEventListener('click', () => {\r\n\t\t\t\t\tdocument.querySelector('.wrapperDialog').classList.remove('active');\r\n\t\t\t\t\tdocument.body.classList.remove('lock');\r\n\t\t\t\t})\r\n\t\t\t\tdocument.querySelector('.wrapperDialog').classList.add('active');\r\n\t\t\t})\r\n\t\t}\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialog);\n\n//# sourceURL=webpack://nike/./js/moduls/dialog.js?");

/***/ }),

/***/ "./js/moduls/scroll.js":
/*!*****************************!*\
  !*** ./js/moduls/scroll.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n\tconst smoothLinks = document.querySelectorAll('.link');\r\n\tfor (let smoothLink of smoothLinks) {\r\n\t\tsmoothLink.addEventListener('click', function (e) {\r\n\t\t\te.preventDefault();\r\n\t\t\tconst id = smoothLink.getAttribute('href');\r\n\r\n\t\t\t//if(document.querySelector('.header__burger')) {\r\n\t\t\t//\tdocument.querySelector('.header__body').classList.toggle('active');\r\n\t\t\t//\tdocument.body.classList.toggle('lock');\r\n\t\t\t//}\r\n\t\t\tdocument.querySelector(id).scrollIntoView({\r\n\t\t\t\tblock: 'start',\r\n\t\t\t\tbehavior: 'smooth'\r\n\t\t\t});\r\n\t\t});\r\n\t};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://nike/./js/moduls/scroll.js?");

/***/ }),

/***/ "./js/moduls/scrollAnimation.js":
/*!**************************************!*\
  !*** ./js/moduls/scrollAnimation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollAnimation = () => {\r\n\tgsap.registerPlugin(ScrollTrigger, ScrollSmoother, TimelineMax);\r\n\r\n\tif (window.innerWidth <= 2000) {\r\n\t\tif (ScrollTrigger.isTouch !== 1) {\t\r\n\t\t\tgsap.fromTo('.hero__image', { opacity: 0, x: 300}, {opacity: 1, x: 0});\r\n\r\n\t\t\tgsap.fromTo('.hero__bottom', { opacity: 0, y: 100},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\ty: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.hero__content',\r\n\t\t\t\t\tstart: '-200',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\tgsap.fromTo('.view__text-block', { opacity: 0, x: -200},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\tx: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.view__body',\r\n\t\t\t\t\tstart: '-300',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\tgsap.fromTo('.view__video', { opacity: 0, x: 200},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\tx: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.view__body',\r\n\t\t\t\t\tstart: '-300',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\tgsap.fromTo('.best__image-block', { opacity: 0, x: -200},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\tx: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.best__body',\r\n\t\t\t\t\tstart: '-300',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\tgsap.fromTo('.best__content', { opacity: 0, x: 200},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\tx: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.best__body',\r\n\t\t\t\t\tstart: '-300',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\tgsap.fromTo('.hero__bottom', { opacity: 0, y: 100},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\ty: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.hero__content',\r\n\t\t\t\t\tstart: '-200',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollAnimation);\n\n//# sourceURL=webpack://nike/./js/moduls/scrollAnimation.js?");

/***/ }),

/***/ "./js/moduls/slider.js":
/*!*****************************!*\
  !*** ./js/moduls/slider.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n\tnew Swiper('.swiper', {\r\n\t\teffect: 'cube',\r\n\t\tloop: true,\r\n\t\tcubeEffect: {\r\n\t\t  slideShadows: false,\r\n\t\t  shadow: false,\r\n\t\t},\r\n\t\tautoplay: {\r\n\t\t\tdelay: 15000,\r\n\t\t},\r\n\t\tslidesPerView: 1,\r\n\t\tnavigation: {\r\n\t\t\tnextEl: '.slider__arrow-next',\r\n\t\t\tprevEl: '.slider__arrow-prev',\r\n\t\t},\r\n\t\tpagination: {\r\n\t\t\tel: '.slider__dots',\r\n\t\t\tclickable: true,\r\n\t\t\ttype: 'bullets',\r\n\t\t},\r\n\t});\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://nike/./js/moduls/slider.js?");

/***/ }),

/***/ "./js/moduls/tabs.js":
/*!***************************!*\
  !*** ./js/moduls/tabs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\tconst tabsImage = document.querySelectorAll('.hero__image'),\r\n\t\t  tabsButton = document.querySelectorAll('.hero__tab');\r\n\r\n\ttabsButton.forEach((item, index) => {\r\n\t\titem.addEventListener('click', (event) => {\r\n\t\t\ttabsButton.forEach(item => item.classList.remove('active'));\r\n\t\t\ttabsImage.forEach(item => item.classList.remove('active'));\r\n\t\t\ttabsImage[index].classList.add('active');\r\n\t\t\titem.classList.add('active');\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://nike/./js/moduls/tabs.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moduls_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/burger */ \"./js/moduls/burger.js\");\n/* harmony import */ var _moduls_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/dialog */ \"./js/moduls/dialog.js\");\n/* harmony import */ var _moduls_scrollAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/scrollAnimation */ \"./js/moduls/scrollAnimation.js\");\n/* harmony import */ var _moduls_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduls/slider */ \"./js/moduls/slider.js\");\n/* harmony import */ var _moduls_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moduls/tabs */ \"./js/moduls/tabs.js\");\n/* harmony import */ var _moduls_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moduls/scroll */ \"./js/moduls/scroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\t(0,_moduls_burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\t(0,_moduls_scrollAnimation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\t(0,_moduls_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\t(0,_moduls_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\t(0,_moduls_dialog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\t(0,_moduls_scroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n});\n\n//# sourceURL=webpack://nike/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;