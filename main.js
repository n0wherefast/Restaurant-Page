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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction contact (){\n    \nconst contactPage = document.createElement('div');\nconst pContact = document.createElement('p');\n  \n   contactPage.classList.add('Cpage');\n   contactPage.innerHTML='<div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe width=\"300\" height=\"250\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=nevada&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><br></div></div>'\n   pContact.innerHTML='Location:  282 Griffith St,  Lenora Hills, Nevada';\n   pContact.classList.add('pContact')\n   contactPage.appendChild(pContact);\n   return contactPage \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nfunction home(){\nconst homePage = document.createElement('div');\nconst imgHome = document.createElement('div');\nconst pHome = document.createElement('p');\n\n    homePage.classList.add('Hpage');    \n    pHome.innerHTML='The best pizza in your country';\n    homePage.appendChild(pHome);\n    imgHome.classList.add('imgHome');\n    homePage.appendChild(imgHome)\n    return homePage\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webSite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webSite */ \"./src/webSite.js\");\n\n\n(0,_webSite__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction menu(){\n\n  const menuPage = document.createElement('div');\n  const imgMenu = document.createElement('div');\n    \n    menuPage.classList.add('Mpage');\n    imgMenu.classList.add('imgMenu');\n    menuPage.appendChild(imgMenu);\n    return menuPage\n}\n \n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/webSite.js":
/*!************************!*\
  !*** ./src/webSite.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst container = document.createElement('div');\nconst head = document.createElement('div');\nconst h1 = document.createElement('h1');\nconst nav = document.createElement('nav');\n\nconst homeBtn = document.createElement('button');\n\nconst menuBtn = document.createElement('button')\n\nconst contactBtn = document.createElement('button');\n\n\n\n\n\nfunction draw(){\n    container.classList.add('container');\n    head.classList.add('head');\n    h1.innerHTML='Surfer Boy Pizza';\n    head.appendChild(h1)\n    container.appendChild(head);\n    head.appendChild(nav);\n    nav.appendChild(homeBtn);\n    homeBtn.innerHTML='Home';\n    menuBtn.innerHTML='Menu';\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n    contactBtn.innerHTML='Contact';\n    container.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n\n\n   \n\n    menuBtn.addEventListener('click',()=>{\n        container.removeChild(container.lastElementChild)\n        container.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n    \n    })\n    homeBtn.addEventListener('click',()=>{\n        container.removeChild(container.lastElementChild)\n        container.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n\n    })\n    contactBtn.addEventListener('click',()=>{\n        container.removeChild(container.lastElementChild)\n        container.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n\n    })\n\n\n\n    return container;\n}\n\n\nfunction webSite(){\n  document.body.appendChild(draw());  \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (webSite);\n\n\n//# sourceURL=webpack://restaurant-page/./src/webSite.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;