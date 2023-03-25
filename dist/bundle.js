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

/***/ "./js/moduls/scrollAnimation.js":
/*!**************************************!*\
  !*** ./js/moduls/scrollAnimation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollAnimation = () => {\r\n\tgsap.registerPlugin(ScrollTrigger, ScrollSmoother, TimelineMax);\r\n\r\n\tif (window.innerWidth <= 1600) {\r\n\t\tif (ScrollTrigger.isTouch !== 1) {\t\r\n\t\t\tgsap.fromTo('.hero__image', { opacity: 0, x: 300}, {opacity: 1, x: 0});\r\n\r\n\t\t\tgsap.fromTo('.hero__bottom', { opacity: 0, y: 100},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\ty: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.hero__content',\r\n\t\t\t\t\tstart: '-200',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\tgsap.fromTo('.view__text-block', { opacity: 0, x: -200},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\tx: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.view__body',\r\n\t\t\t\t\tstart: '-300',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\tgsap.fromTo('.view__video', { opacity: 0, x: 200},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\tx: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.view__body',\r\n\t\t\t\t\tstart: '-300',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\tgsap.fromTo('.best__image-block', { opacity: 0, x: -200},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\tx: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.best__body',\r\n\t\t\t\t\tstart: '-300',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\tgsap.fromTo('.best__content', { opacity: 0, x: 200},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\tx: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.best__body',\r\n\t\t\t\t\tstart: '-300',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\tgsap.fromTo('.hero__bottom', { opacity: 0, y: 100},  {\r\n\t\t\t\topacity: 1, \r\n\t\t\t\ty: 0,\r\n\t\t\t\tscrollTrigger: {\r\n\t\t\t\t\ttrigger: '.hero__content',\r\n\t\t\t\t\tstart: '-200',\r\n\t\t\t\t\tend: '-50',\r\n\t\t\t\t\tscrub: true\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollAnimation);\n\n//# sourceURL=webpack://nike/./js/moduls/scrollAnimation.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moduls_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/burger */ \"./js/moduls/burger.js\");\n/* harmony import */ var _moduls_scrollAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/scrollAnimation */ \"./js/moduls/scrollAnimation.js\");\n/* harmony import */ var _moduls_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/slider */ \"./js/moduls/slider.js\");\n/* harmony import */ var _moduls_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduls/tabs */ \"./js/moduls/tabs.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\t(0,_moduls_burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\t(0,_moduls_scrollAnimation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\t(0,_moduls_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\t(0,_moduls_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://nike/./js/script.js?");

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