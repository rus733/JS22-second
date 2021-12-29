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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validationForms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validationForms */ \"./modules/validationForms.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('31 december 2021');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validationForms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu');\r\n  const menu = document.querySelector('menu');\r\n  const closeBtn = menu.querySelector('.close-btn');\r\n  const menuItem = menu.querySelectorAll('ul>li>a[href*=\"#\"]');\r\n  const mainBlock = document.querySelector('main');\r\n  const mainLink = mainBlock.querySelector('a[href*=\"#\"]');\r\n  const scrollScreen = (element) => {\r\n    const blockId = element.getAttribute('href');\r\n    document.querySelector('' + blockId).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start',\r\n    });\r\n  };\r\n  // ф  закрытия меню\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu');\r\n  };\r\n\r\n  //перебор элементов меню бургер\r\n  menuItem.forEach((item) => {\r\n    item.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      scrollScreen(item);\r\n      handleMenu();\r\n    });\r\n  });\r\n\r\n  //кнопка меню\r\n  menuBtn.addEventListener('click', handleMenu);\r\n  //кнопка закрытия меню\r\n  closeBtn.addEventListener('click', handleMenu);\r\n  // кнопка прокрутки\r\n  mainLink.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    scrollScreen(mainLink);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const closeBtn = modal.querySelector('.popup-close');\r\n  // переменные для анимации\r\n  let opacityValue = 0,\r\n    step = 0.03,\r\n    animInterval = 0;\r\n\r\n  // анимация\r\n  function animModalWindow() {\r\n    opacityValue += step;\r\n\r\n    if (opacityValue >= 1) {\r\n      opacityValue = 1;\r\n      cancelAnimationFrame(animInterval);\r\n    }\r\n    modal.style.opacity = opacityValue;\r\n    animInterval = requestAnimationFrame(animModalWindow);\r\n  }\r\n\r\n  // открываем модальное окно\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener('click', () => {\r\n      // проверка размера экрана\r\n      if (window.screen.width < 768) {\r\n        modal.style.display = 'block';\r\n      } else {\r\n        modal.style.display = 'block';\r\n        modal.style.opacity = '0';\r\n        animInterval = requestAnimationFrame(animModalWindow);\r\n      }\r\n    });\r\n  });\r\n  // закрываем модальное окно\r\n  closeBtn.addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n    opacityValue = 0;\r\n    cancelAnimationFrame(animInterval);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById('timer-hours');\r\n  const timerMinutes = document.getElementById('timer-minutes');\r\n  const timerSeconds = document.getElementById('timer-seconds');\r\n  let idInterval;\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    if (timeRemaining <= 0) {\r\n      clearInterval(idInterval);\r\n      hours = 0;\r\n      minutes = 0;\r\n      seconds = 0;\r\n    }\r\n\r\n    return {\r\n      timeRemaining,\r\n      hours,\r\n      minutes,\r\n      seconds,\r\n    };\r\n  };\r\n\r\n  const addZero = (arg) => {\r\n    if (arg < 10) {\r\n      return '0' + arg;\r\n    } else {\r\n      return arg;\r\n    }\r\n  };\r\n\r\n  const updateClock = () => {\r\n    const allTime = getTimeRemaining();\r\n    timerHours.textContent = addZero(allTime.hours);\r\n    timerMinutes.textContent = addZero(allTime.minutes);\r\n    timerSeconds.textContent = addZero(allTime.seconds);\r\n  };\r\n\r\n  updateClock();\r\n\r\n  idInterval = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validationForms.js":
/*!************************************!*\
  !*** ./modules/validationForms.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validationForms = () => {\r\n  const inputsCalc = document.querySelectorAll('.calc-item');\r\n  const inputName = document.querySelectorAll('.form-name');\r\n  const inputPhone = document.querySelectorAll('.form-phone');\r\n  const inputEmail = document.querySelectorAll('.form-email');\r\n  const inputNameBottom = document.querySelector('#form2-name');\r\n  const inputMessageBottom = document.querySelector('#form2-message');\r\n  const customTrim = (val) =>\r\n    val\r\n      .replace(/([ \\-()@_.!~*'])(?=[ \\-()@_.!~*']*\\1)/g, '')\r\n      .replace(/^[ |\\-+]/g, '')\r\n      .replace(/[ |\\-+]$/g, '');\r\n\r\n  // валидация input-ов калькулятора\r\n  inputsCalc.forEach((input) => {\r\n    input.addEventListener('input', () => {\r\n      input.value = input.value.replace(/[^\\d.]/g, '');\r\n    });\r\n  });\r\n  // валидация ввода имени\r\n\r\n  [...inputName, inputNameBottom].forEach((input) => {\r\n    input.addEventListener('blur', (e) => {\r\n      let val = e.target.value;\r\n      val = val.replace(/[^а-яё \\-]/gi, '');\r\n      val = customTrim(val);\r\n      val = val.toLowerCase();\r\n      val = val.replace(/( |^|\\-)[ а-яё]/g, (u) => u.toUpperCase());\r\n      e.target.value = val;\r\n    });\r\n    input.addEventListener('input', () => {\r\n      input.value = input.value.replace(/[^а-яё \\-]/gi, '');\r\n    });\r\n  });\r\n\r\n  /*\r\n  inputName.forEach((input) => {\r\n    input.addEventListener('blur', (e) => {\r\n      let val = e.target.value;\r\n      val = val.replace(/[^а-яё \\-]/gi, '');\r\n      val = customTrim(val);\r\n      val = val.toLowerCase();\r\n      val = val.replace(/( |^|\\-)[ а-яё]/g, (u) => u.toUpperCase());\r\n      e.target.value = val;\r\n    });\r\n    input.addEventListener('input', () => {\r\n      input.value = input.value.replace(/[^а-яё \\-]/gi, '');\r\n    });\r\n  });\r\n*/\r\n  //  валидация ввода почтового адреса\r\n  inputEmail.forEach((input) => {\r\n    input.addEventListener('blur', (e) => {\r\n      let val = e.target.value;\r\n      val = val.replace(/[^A-Za-z-@!.*~'_]/g, '');\r\n      val = customTrim(val);\r\n      //e.target.value = '';\r\n      e.target.value = val;\r\n    });\r\n    input.addEventListener('input', () => {\r\n      input.value = input.value.replace(/[^A-Za-z-@!.*~'_]/g, '');\r\n    });\r\n  });\r\n\r\n  //  валидация ввода номера телефона\r\n\r\n  inputPhone.forEach((input) => {\r\n    input.addEventListener('blur', (e) => {\r\n      let val = e.target.value;\r\n      val = val.replace(/[^\\d-)(]/g, '');\r\n      val = customTrim(val);\r\n      //e.target.value = '';\r\n      e.target.value = val;\r\n    });\r\n    input.addEventListener('input', () => {\r\n      input.value = input.value.replace(/[^\\d-)(]/g, '');\r\n    });\r\n  });\r\n\r\n  /// валидация ввода имени нижней формы\r\n  /*\r\n  inputNameBottom.addEventListener('blur', (e) => {\r\n    let val = e.target.value;\r\n    val = val.replace(/[^а-яё \\-]/gi, '');\r\n    val = customTrim(val);\r\n    //val = val.toLowerCase();\r\n    val = val.replace(/( |^)[ а-яё]/g, (u) => u.toUpperCase());\r\n    e.target.value = val;\r\n  });\r\n\r\n  inputNameBottom.addEventListener('input', () => {\r\n    inputNameBottom.value = inputNameBottom.value.replace(/[^а-яё \\-]/gi, '');\r\n  });\r\n*/\r\n  /// валидация ввода сообщения\r\n  inputMessageBottom.addEventListener('blur', (e) => {\r\n    let val = e.target.value;\r\n    val = val.replace(/[^а-яё \\-]/gi, '');\r\n    val = customTrim(val);\r\n    //e.target.value = '';\r\n    e.target.value = val;\r\n  });\r\n\r\n  inputMessageBottom.addEventListener('input', () => {\r\n    inputMessageBottom.value = inputMessageBottom.value.replace(/[^а-яё \\-]/gi, '');\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationForms);\r\n\n\n//# sourceURL=webpack:///./modules/validationForms.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;