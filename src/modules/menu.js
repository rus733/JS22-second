const menu = () => {
  const menu = document.querySelector('menu');
  const mainBlock = document.querySelector('main');

  const toggleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  const scrollView = (arg) => {
    document.querySelector(arg).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  document.body.addEventListener('click', (e) => {
    let target = e.target;
    let itsMenu = target == menu || menu.contains(target);
    let menuActive = menu.classList.contains('active-menu');

    if (target.closest('.menu')) {
      toggleMenu();
      return;
    }

    if ((!itsMenu && menuActive) || target.closest('.close-btn')) {
      menu.classList.remove('active-menu');
      return;
    }

    //кнопка-ссылка в main к блоку услуг
    if (target.closest('a[href*="#"]') && mainBlock.contains(target)) {
      e.preventDefault();
      const blockId = target.closest('a[href*="#"]').getAttribute('href');
      //scrollView(blockId);
      document.querySelector(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      toggleMenu();
    }

    //кнопки-ссылки в menu
    if (target.closest('a[href*="#"]') && menu.contains(target)) {
      e.preventDefault();
      const blockId = target.getAttribute('href');
      scrollView(blockId);
      toggleMenu();
    }
  });
};
export default menu;
