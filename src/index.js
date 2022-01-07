'use strict';

import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validationForms from './modules/validationForms';
import tabs from './modules/tabs';
import slider from './modules/slider';
timer('31 december 2022');
menu();
modal();
validationForms();
tabs();
slider({
  sliderContent: 'portfolio-content',
  sliderItemClass: 'portfolio-item',
  sliderBtnsClass: 'portfolio-btn',
  nextSlideBtn: '#arrow-right',
  prevSlideBtn: '#arrow-left',
  slideActiveClass: 'portfolio-item-active',
  dotsContentClass: 'portfolio-dots',
  dotClass: 'dot',
  dotActiveClass: 'dot-active',
  timer: 3000,
});
