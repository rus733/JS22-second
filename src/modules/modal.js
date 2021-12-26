const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');

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

  // анимация
  let opacityValue = 0,
    step = 0.1,
    animInterval = 0;

  function animModalWindow() {
    opacityValue += step;
    animInterval = requestAnimationFrame(animModalWindow);
    if (opacityValue >= 1) {
      opacityValue = 1;
      cancelAnimationFrame(animInterval);
    }
    modal.style.opacity = opacityValue;
  }

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

export default modal;