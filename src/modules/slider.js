const slider = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  const dots = document.querySelectorAll('.dot');
  //let ulDots = document.querySelector('.portfolio-dots');
  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer); // присвоим переменнной значение нашего интервала
  };
  // необходимо реализовать  вызов stopSlide при наведении курсора на стрелку или точку -кнопку
  // и при уведении курсора вызов startSlide
  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();
    //ограничитель  обработчика по нужным классам
    if (!e.target.matches('.dot, .portfolio-btn')) {
      //console.log(1);
      return; // если не по кнопкам вперед, назад , точки , программа завершается
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if (e.target.matches('#arrow-right')) {
      currentSlide++;
    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;
    } else if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  });

  // напишем два обработчика  на sliderBlock для работы с интервалом
  // когда наводим мышь  активируем stopSlide()
  sliderBlock.addEventListener(
    'mouseenter',
    (e) => {
      //console.log(e.target); // выведем event.target до условия
      if (e.target.matches('.dot, .portfolio-btn')) {
        //console.log(e.target);
        stopSlide();
      }
    },
    true
  ); //добавим true активируем всплытия, чтобы событие отрабатывало на дочерних элементах

  //
  //когда уводим мышь активируем startSlide()
  sliderBlock.addEventListener(
    'mouseleave',
    (e) => {
      //console.log(e.target);
      if (e.target.matches('.dot, .portfolio-btn')) {
        //console.log(e.target);
        startSlide(timeInterval);
      }
    },
    true
  ); //добавим  true активируем всплытия, чтобы событие отрабатывало на дочерних элементах

  startSlide(timeInterval);
};

export default slider;
