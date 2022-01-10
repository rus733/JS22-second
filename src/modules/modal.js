const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  // переменные для анимации
  let opacityValue = 0,
      animInterval = 0;
  const step = 0.03,

  // анимация
  function animModalWindow() { // ругается eslint  
    opacityValue += step;

    if (opacityValue >= 1) {
      opacityValue = 1;
      cancelAnimationFrame(animInterval);
    }
    modal.style.opacity = opacityValue;
    animInterval = requestAnimationFrame(animModalWindow);
  }

  // открываем модальное окно
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // проверка размера экрана
      if (window.screen.width < 768) {
        modal.style.display = 'block';
      } else {
        modal.style.display = 'block';
        modal.style.opacity = '0';
        animInterval = requestAnimationFrame(animModalWindow);
      }
    });
  });
  // закрываем модальное окно
  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
      opacityValue = 0;
      cancelAnimationFrame(animInterval);
    }
  });
};

export default modal;
