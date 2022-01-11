import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validationForms from './modules/validationForms';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
timer('11 january 2022');
menu();
modal();
validationForms();
tabs();
calc(100);

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
  timer: 2000,
});
sendForm({
  formId: 'form1',
  someElem: [
    {
      type: 'block', //может быть  и span, и блок , можно обращаться уже свойству текстКонтент, может и  input,
      // усли input , то можно получать value - ниже
      id: 'total', //id - результат калькулятора
    },
  ],
});
