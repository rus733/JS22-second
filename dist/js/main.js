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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validationForms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validationForms */ \"./modules/validationForms.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('31 december 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validationForms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n  sliderContent: 'portfolio-content',\r\n  sliderItemClass: 'portfolio-item',\r\n  sliderBtnsClass: 'portfolio-btn',\r\n  nextSlideBtn: '#arrow-right',\r\n  prevSlideBtn: '#arrow-left',\r\n  slideActiveClass: 'portfolio-item-active',\r\n  dotsContentClass: 'portfolio-dots',\r\n  dotClass: 'dot',\r\n  dotActiveClass: 'dot-active',\r\n  timer: 2000,\r\n});\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector('.calc-block');\r\n  const calcType = document.querySelector('.calc-type');\r\n  const calcSquare = document.querySelector('.calc-square');\r\n  const calcCount = document.querySelector('.calc-count');\r\n  const calcDay = document.querySelector('.calc-day');\r\n  const total = document.querySelector('#total');\r\n\r\n  const countCalc = () => {\r\n    //const calcTypeValue = calcType;\r\n    console.dir(calcType.options[calcType.selectedIndex]);\r\n  };\r\n\r\n  calcBlock.addEventListener('input', e => {\r\n    //console.log(e.target);\r\n    if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {\r\n      countCalc();\r\n      //console.log(e.target);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menu = document.querySelector('menu');\r\n  const scrollView = (id) => {\r\n    document.querySelector(id).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start',\r\n    });\r\n  };\r\n\r\n  document.body.addEventListener('click', (e) => {\r\n    const target = e.target;\r\n    const closestLink = target.closest('a[href*=\"#\"]');\r\n    const closestMenu = target.closest('menu');\r\n\r\n    if (target.closest('.menu') || target.closest('.close-btn')) {\r\n      menu.classList.toggle('active-menu');\r\n      return;\r\n    }\r\n    // клик мимо меню или по ссылке\r\n    if (!closestMenu || closestLink) menu.classList.remove('active-menu');\r\n\r\n    //скрол кнопка-ссылка в main или кнопка-ссылка в меню\r\n    if (closestLink && (closestLink.closest('main') || closestMenu)) {\r\n      e.preventDefault();\r\n      scrollView(closestLink.getAttribute('href'));\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  // переменные для анимации\r\n  let opacityValue = 0,\r\n    step = 0.03,\r\n    animInterval = 0;\r\n\r\n  // анимация\r\n  function animModalWindow() {\r\n    opacityValue += step;\r\n\r\n    if (opacityValue >= 1) {\r\n      opacityValue = 1;\r\n      cancelAnimationFrame(animInterval);\r\n    }\r\n    modal.style.opacity = opacityValue;\r\n    animInterval = requestAnimationFrame(animModalWindow);\r\n  }\r\n\r\n  // открываем модальное окно\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener('click', () => {\r\n      // проверка размера экрана\r\n      if (window.screen.width < 768) {\r\n        modal.style.display = 'block';\r\n      } else {\r\n        modal.style.display = 'block';\r\n        modal.style.opacity = '0';\r\n        animInterval = requestAnimationFrame(animModalWindow);\r\n      }\r\n    });\r\n  });\r\n  // закрываем модальное окно\r\n  modal.addEventListener('click', (e) => {\r\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      modal.style.display = 'none';\r\n      opacityValue = 0;\r\n      cancelAnimationFrame(animInterval);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = ({\r\n  sliderContent,\r\n  sliderBtnsClass,\r\n  nextSlideBtn,\r\n  prevSlideBtn,\r\n  sliderItemClass,\r\n  dotsContentClass,\r\n  dotClass,\r\n  dotActiveClass = 'dot-active',\r\n  slideActiveClass = 'portfolio-item-active',\r\n  timer,\r\n}) => {\r\n  if (!sliderContent || !sliderItemClass) {\r\n    return;\r\n  }\r\n  const sliderBlock = document.querySelector(`.${sliderContent}`);\r\n  const sliders = document.querySelectorAll(`.${sliderItemClass}`);\r\n  const portfolioDots = document.querySelector(`.${dotsContentClass}`);\r\n\r\n  let currentSlide = 0;\r\n  let dots;\r\n  let interval;\r\n\r\n  const createDots = () => {\r\n    sliders.forEach(() => {\r\n      const dot = document.createElement('li');\r\n      dot.classList.add(dotClass);\r\n      portfolioDots.append(dot);\r\n    });\r\n    dots = document.querySelectorAll(`.${dotClass}`);\r\n    dots[currentSlide].classList.add(dotActiveClass);\r\n  };\r\n\r\n  const prevSlide = (elems, idx, className) => {\r\n    elems[idx].classList.remove(className);\r\n  };\r\n\r\n  const nextSlide = (elems, idx, className) => {\r\n    elems[idx].classList.add(className);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(sliders, currentSlide, slideActiveClass);\r\n    prevSlide(dots, currentSlide, dotActiveClass);\r\n    currentSlide++;\r\n    if (currentSlide >= sliders.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(sliders, currentSlide, slideActiveClass);\r\n    nextSlide(dots, currentSlide, dotActiveClass);\r\n  };\r\n\r\n  const startSlide = (timer = 2000) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', e => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(sliders, currentSlide, slideActiveClass);\r\n    prevSlide(dots, currentSlide, dotActiveClass);\r\n\r\n    if (e.target.matches(nextSlideBtn)) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(prevSlideBtn)) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(dotClass)) {\r\n      dots.forEach((dot, idx) => {\r\n        if (e.target === dot) {\r\n          currentSlide = idx;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= sliders.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = sliders.length - 1;\r\n    }\r\n\r\n    nextSlide(sliders, currentSlide, slideActiveClass);\r\n    nextSlide(dots, currentSlide, dotActiveClass);\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseenter',\r\n    e => {\r\n      if (e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseleave',\r\n    e => {\r\n      if (e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {\r\n        startSlide(timer);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  createDots();\r\n  startSlide(timer);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header');\r\n  const tabs = document.querySelectorAll('.service-header-tab');\r\n  const tabContent = document.querySelectorAll('.service-tab');\r\n  tabPanel.addEventListener('click', (e) => {\r\n    if (e.target.closest('.service-header-tab')) {\r\n      const tabBtn = e.target.closest('.service-header-tab');\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active');\r\n          tabContent[index].classList.remove('d-none');\r\n        } else {\r\n          tab.classList.remove('active');\r\n          tabContent[index].classList.add('d-none');\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validationForms = () => {\r\n  const inputsCalc = document.querySelectorAll('.calc-item');\r\n  const inputName = document.querySelectorAll('.form-name');\r\n  const inputPhone = document.querySelectorAll('.form-phone');\r\n  const inputEmail = document.querySelectorAll('.form-email');\r\n  const inputNameBottom = document.querySelector('#form2-name');\r\n  const inputMessageBottom = document.querySelector('#form2-message');\r\n  const customTrim = (val) =>\r\n    val\r\n      .replace(/([ \\-()@_.!~*'])(?=[ \\-()@_.!~*']*\\1)/g, '')\r\n      .replace(/^[ |\\-+]/g, '')\r\n      .replace(/[ |\\-+]$/g, '');\r\n\r\n  // валидация input-ов калькулятора\r\n  inputsCalc.forEach((input) => {\r\n    input.addEventListener('input', () => {\r\n      input.value = input.value.replace(/[^\\d.]/g, '');\r\n    });\r\n  });\r\n  // валидация ввода имени верхней и нижней формы\r\n\r\n  [...inputName, inputNameBottom].forEach((input) => {\r\n    input.addEventListener('blur', (e) => {\r\n      let val = e.target.value;\r\n      val = val.replace(/[^а-яё \\-]/gi, '');\r\n      val = customTrim(val);\r\n      val = val.toLowerCase();\r\n      val = val.replace(/( |^|\\-)[ а-яё]/g, (u) => u.toUpperCase());\r\n      e.target.value = val;\r\n    });\r\n    input.addEventListener('input', () => {\r\n      input.value = input.value.replace(/[^а-яё \\-]/gi, '');\r\n    });\r\n  });\r\n\r\n  //  валидация ввода почтового адреса\r\n  inputEmail.forEach((input) => {\r\n    input.addEventListener('blur', (e) => {\r\n      let val = e.target.value;\r\n      val = val.replace(/[^A-Za-z-@!.*~'_]/g, '');\r\n      val = customTrim(val);\r\n      e.target.value = val;\r\n    });\r\n    input.addEventListener('input', () => {\r\n      input.value = input.value.replace(/[^A-Za-z-@!.*~'_]/g, '');\r\n    });\r\n  });\r\n\r\n  //  валидация ввода номера телефона\r\n\r\n  inputPhone.forEach((input) => {\r\n    input.addEventListener('blur', (e) => {\r\n      let val = e.target.value;\r\n      val = val.replace(/[^\\d-)(]/g, '');\r\n      val = customTrim(val);\r\n      e.target.value = val;\r\n    });\r\n    input.addEventListener('input', () => {\r\n      input.value = input.value.replace(/[^\\d-)(]/g, '');\r\n    });\r\n  });\r\n\r\n  /// валидация ввода сообщения\r\n  inputMessageBottom.addEventListener('blur', (e) => {\r\n    let val = e.target.value;\r\n    val = val.replace(/[^а-яё \\-]/gi, '');\r\n    val = customTrim(val);\r\n    e.target.value = val;\r\n  });\r\n\r\n  inputMessageBottom.addEventListener('input', () => {\r\n    inputMessageBottom.value = inputMessageBottom.value.replace(/[^а-яё \\-]/gi, '');\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationForms);\r\n\n\n//# sourceURL=webpack:///./modules/validationForms.js?");

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