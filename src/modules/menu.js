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
      //закрыл меню кнопкой
      //} else if (target.closest('.close-btn')) {
      //toggleMenu();
      //console.log('закрыл меню кнопкой');
      // return;
    } else if ((!itsMenu && menuActive) || target.closest('.close-btn')) {
      //toggleMenu();
      menu.classList.remove('active-menu');
      return;
      //кнопка-ссылка в main к блоку услуг
    } else if (target.closest('a[href*="#"]') && mainBlock.contains(target)) {
      e.preventDefault();
      const blockId = target.closest('a[href*="#"]').getAttribute('href');
      scrollView(blockId);
      //кнопки-ссылки в menu
    } else if (target.closest('a[href*="#"]') && menu.contains(target)) {
      e.preventDefault();
      const blockId = target.getAttribute('href');
      scrollView(blockId);
      toggleMenu();
    }

    /*
      //кнопка-ссылка в main к блоку услуг
    } else if (target.closest('a[href*="#"]') && mainBlock.contains(target)) {
      e.preventDefault();
      const blockId = target.closest('a[href*="#"]').getAttribute('href');
      scrollView(blockId);
      //кнопки-ссылки в menu
    } else if (target.closest('a[href*="#"]') && menu.contains(target)) {
      e.preventDefault();
      const blockId = target.getAttribute('href');
      scrollView(blockId);
      toggleMenu();
    } else if (!itsMenu && menuActive || target.closest('.close-btn')) {
      toggleMenu();
    }
*/
  });
};
export default menu;
