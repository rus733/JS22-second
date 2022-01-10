import { animate } from './helpers.js';

const modal = () => {
  const popupBtns = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');
  const content = modal.querySelector('.popup-content');

  console.dir(popupBtns);
  console.dir(modal);
  console.dir(modal.style);
  console.log(content);

  const animateModal = () => {
    const isOpen = modal.style.display === 'block';
    animate({
      duration: 500,
      timing(timeFraction) {
        return isOpen ? 1 - timeFraction : timeFraction; //
      },
      draw(progress) {
        progress > 0.5 ? (content.style.display = 'block') : (content.style.display = 'none');
        if (progress * 2 < 1) modal.style.opacity = `${progress * 2}`;
        if (progress * 2 > 1) {
          content.style.transform = `scale(${progress * 2 - 1})`;
          content.style.opacity = `${progress * 2 - 1}`;
        }
        progress > 0 ? (modal.style.display = 'block') : (modal.style.display = 'none');
      },
    });
  };

  content.style.transform = 'scale(0)';
  modal.style.opacity = '0';
  // кнопка вызова popUp
  popupBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (document.documentElement.clientWidth > 768) {
        animateModal();
      } else {
        modal.style.opacity = '1';
        modal.style.display = 'block';
        content.style.opacity = '1';
        content.style.transform = 'scale(1)';
        content.style.display = 'block';
      }
    });
  });
  // кнопка закрытия  popUp
  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      if (document.documentElement.clientWidth > 768) {
        animateModal();
      } else {
        modal.style.display = 'none';
        modal.style.opacity = '0';
        content.style.opacity = '0';
        content.style.transform = 'scale(0)';
        content.style.display = 'none';
      }
    }
  });
};

export default modal;
