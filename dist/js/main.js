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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validationForms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validationForms */ \"./modules/validationForms.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('11 january 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validationForms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n  sliderContent: 'portfolio-content',\r\n  sliderItemClass: 'portfolio-item',\r\n  sliderBtnsClass: 'portfolio-btn',\r\n  nextSlideBtn: '#arrow-right',\r\n  prevSlideBtn: '#arrow-left',\r\n  slideActiveClass: 'portfolio-item-active',\r\n  dotsContentClass: 'portfolio-dots',\r\n  dotClass: 'dot',\r\n  dotActiveClass: 'dot-active',\r\n  timer: 2000,\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n  formId: 'form1',\r\n  someElem: [\r\n    {\r\n      type: 'block', //может быть  и span, и блок , можно обращаться уже свойству текстКонтент, может и  input,\r\n      // усли input , то можно получать value - ниже\r\n      id: 'total', //id - результат калькулятора\r\n    },\r\n  ],\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./modules/helpers.js\");\n\r\nconst calc = (price = 100) => {\r\n  const calcBlock = document.querySelector('.calc-block');\r\n  const calcType = document.querySelector('.calc-type');\r\n  const calcSquare = document.querySelector('.calc-square');\r\n  const calcCount = document.querySelector('.calc-count');\r\n  const calcDay = document.querySelector('.calc-day');\r\n  const total = document.querySelector('#total');\r\n\r\n  const calcInputs = document.querySelectorAll('.calc-block > input');\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n\r\n      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n        duration: 500,\r\n        timing(timeFraction) {\r\n          return Math.pow(timeFraction, 4);\r\n        },\r\n        draw(progress) {\r\n          total.textContent = Math.round(progress * totalValue);\r\n        },\r\n      });\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n  };\r\n\r\n  calcInputs.forEach((input) => {\r\n    input.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\D/gi, '');\r\n    });\r\n  });\r\n\r\n  calcBlock.addEventListener('input', () => {\r\n    countCalc();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  const start = performance.now(); //фиксируем точку времени на данный момент. старт анимации\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration; // duration -длительности анимации,time- текущее время\r\n    if (timeFraction > 1) {\r\n      timeFraction = 1;\r\n    }\r\n\r\n    // вычисление текущего состояния анимации\r\n    const progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n  const popupBtns = document.querySelectorAll('.popup-btn');\r\n  const modal = document.querySelector('.popup');\r\n  const content = modal.querySelector('.popup-content');\r\n  const animateModal = () => {\r\n    const isOpen = modal.style.display === 'block';\r\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 500,\r\n      timing(timeFraction) {\r\n        return isOpen ? 1 - timeFraction : timeFraction; //\r\n      },\r\n      draw(progress) {\r\n        progress > 0.5 ? (content.style.display = 'block') : (content.style.display = 'none');\r\n        if (progress * 2 < 1) modal.style.opacity = `${progress * 2}`;\r\n        if (progress * 2 > 1) {\r\n          content.style.transform = `scale(${progress * 2 - 1})`;\r\n          content.style.opacity = `${progress * 2 - 1}`;\r\n        }\r\n        progress > 0 ? (modal.style.display = 'block') : (modal.style.display = 'none');\r\n      },\r\n    });\r\n  };\r\n\r\n  content.style.transform = 'scale(0)';\r\n  modal.style.opacity = '0';\r\n  // кнопка вызова popUp\r\n  popupBtns.forEach((btn) => {\r\n    btn.addEventListener('click', () => {\r\n      if (document.documentElement.clientWidth > 768) {\r\n        animateModal();\r\n      } else {\r\n        modal.style.opacity = '1';\r\n        modal.style.display = 'block';\r\n        content.style.opacity = '1';\r\n        content.style.transform = 'scale(1)';\r\n        content.style.display = 'block';\r\n      }\r\n    });\r\n  });\r\n  // кнопка закрытия  popUp\r\n  modal.addEventListener('click', (e) => {\r\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      if (document.documentElement.clientWidth > 768) {\r\n        animateModal();\r\n      } else {\r\n        modal.style.display = 'none';\r\n        modal.style.opacity = '0';\r\n        content.style.opacity = '0';\r\n        content.style.transform = 'scale(0)';\r\n        content.style.display = 'none';\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\r\n  const form = document.getElementById(formId);\r\n  // coplflbv новый блок  и неск вариантов текста извещений  при отправке данных\r\n  const statusBlock = document.createElement('div');\r\n  const loadText = 'Загрузка ...';\r\n  const errorText = 'Ошибка ...';\r\n  const successText = 'Спасибо! Наш менеджер с вами свяжется'; // идем в обработчик события submit\r\n\r\n  const validate = (list) => {\r\n    // при каждом submit , проверим наличие класса .success на наших input-ах ,\r\n    //если  хотябы на одном не будет этого класса ,\r\n    // то validate вернет false  и отправка\r\n    // не произойдет sendData(formBody).then((data) =>\r\n    let success = true; // создадим переменную\r\n    //console.log('validate', list);\r\n\r\n    return success; // и возвращаем значение success\r\n  };\r\n\r\n  const sendData = (data) =>\r\n    fetch('https://jsonplaceholder.typicode.com/posts', {\r\n      method: 'POST',\r\n      ///body: data, // переведем data в строчку\r\n      //body: JSON.stringify(data), // formData не можем превращать в JSON\r\n      body: JSON.stringify(data), // при отправке formBody заворачиваем в data в json'\r\n      headers: {\r\n        //'Content-Type': 'multipart/form-data', // при этих условиях не заварачивая в json формат\r\n        'Content-Type': 'application/json', // при отправке formBody заворачиваем в 'application/json'\r\n      },\r\n    }).then((res) => res.json());\r\n\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll('input'); // передадим в ф. validate  полученный  nodeList\r\n    const formData = new FormData(form); // собирает данные со всех элементов формы\r\n    //но только у тех у кого есть аттрибут name=\"user_form\"\r\n\r\n    // соберем данные из new FormData(form)\r\n    // создадим пустой обьект и заполним его forEach\r\n    const formBody = {};\r\n\r\n    statusBlock.textContent = loadText;\r\n    form.append(statusBlock); // блок появится в конце  form  при отправке\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n    // можем делать перебор второго импортируемого аргумента someElem =[]\r\n    someElem.forEach((elem) => {\r\n      console.log(elem); //увидим содержание переданного аргументом someElem\r\n      // можем получит элемент по идентификатору и вытащить его текст содержимое если его тип блок или span\r\n      // или value если тип input\r\n      // получим этот элемент\r\n      const elemetn = document.getElementById(elem.id);\r\n      console.log(elemetn);\r\n      if (elem.type === 'block') {\r\n        formBody[elem.id] = elemetn.textContent;\r\n      } else if (elem.type === 'input') {\r\n        formBody[elem.id] = elemetn.value;\r\n      }\r\n    });\r\n    console.log('submit');\r\n    // нужно сделать проверку  правильности заполнения форм перед отправкой\r\n    //console.log(form.querySelectorAll('input')); // найдем внутри формы все элементы инпут и передадим в validate();\r\n\r\n    if (validate(formElements)) {\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          // и отправляем formBody\r\n          //console.log(data);\r\n          statusBlock.textContent = successText; // при успешной загрузке сменим текст\r\n\r\n          formElements.forEach((input) => {\r\n            //добавим очистку полей input после отправки\r\n            input.value = '';\r\n          });\r\n        })\r\n        .catch((error) => {\r\n          // добавим обработку ошибки методом catch\r\n          statusBlock.textContent = errorText;\r\n        });\r\n    } else {\r\n      alert('Данные не валидны !!!');\r\n    }\r\n  };\r\n\r\n  // добавим на случайесли передали при импорте не тот id\r\n  //или  верстальщик случайно уберет атрибут(name??)\r\n  // иливообще весь элемент то , чтобы код не сломался\r\n  //используем try catch\r\n  try {\r\n    if (!form) {\r\n      throw new Error('Верните форму на место , пожалуйста!!!');\r\n    }\r\n\r\n    form.addEventListener('submit', (event) => {\r\n      event.preventDefault();\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message); //\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = ({\r\n  sliderContent,\r\n  sliderBtnsClass,\r\n  nextSlideBtn,\r\n  prevSlideBtn,\r\n  sliderItemClass,\r\n  dotsContentClass,\r\n  dotClass,\r\n  dotActiveClass = 'dot-active',\r\n  slideActiveClass = 'portfolio-item-active',\r\n  timer,\r\n}) => {\r\n  if (!sliderContent || !sliderItemClass) {\r\n    return;\r\n  }\r\n  const sliderBlock = document.querySelector(`.${sliderContent}`);\r\n  const sliders = document.querySelectorAll(`.${sliderItemClass}`);\r\n  const portfolioDots = document.querySelector(`.${dotsContentClass}`);\r\n\r\n  let currentSlide = 0;\r\n  let dots;\r\n  let interval;\r\n\r\n  const createDots = () => {\r\n    sliders.forEach(() => {\r\n      const dot = document.createElement('li');\r\n      dot.classList.add(dotClass);\r\n      portfolioDots.append(dot);\r\n    });\r\n    dots = document.querySelectorAll(`.${dotClass}`);\r\n    dots[currentSlide].classList.add(dotActiveClass);\r\n  };\r\n\r\n  const prevSlide = (elems, idx, className) => {\r\n    elems[idx].classList.remove(className);\r\n  };\r\n\r\n  const nextSlide = (elems, idx, className) => {\r\n    elems[idx].classList.add(className);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(sliders, currentSlide, slideActiveClass);\r\n    prevSlide(dots, currentSlide, dotActiveClass);\r\n    currentSlide++;\r\n    if (currentSlide >= sliders.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(sliders, currentSlide, slideActiveClass);\r\n    nextSlide(dots, currentSlide, dotActiveClass);\r\n  };\r\n\r\n  const startSlide = (timer = 2000) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(sliders, currentSlide, slideActiveClass);\r\n    prevSlide(dots, currentSlide, dotActiveClass);\r\n\r\n    if (e.target.matches(nextSlideBtn)) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(prevSlideBtn)) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(dotClass)) {\r\n      dots.forEach((dot, idx) => {\r\n        if (e.target === dot) {\r\n          currentSlide = idx;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= sliders.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = sliders.length - 1;\r\n    }\r\n\r\n    nextSlide(sliders, currentSlide, slideActiveClass);\r\n    nextSlide(dots, currentSlide, dotActiveClass);\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseenter',\r\n    (e) => {\r\n      if (e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    'mouseleave',\r\n    (e) => {\r\n      if (e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {\r\n        startSlide(timer);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  createDots();\r\n  startSlide(timer);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

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