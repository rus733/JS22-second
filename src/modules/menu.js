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
    const target = e.target;
    const targetClosestLink = target.closest('a[href*="#"]');
    const itsMenu = target == menu || menu.contains(target);
    const menuActive = menu.classList.contains('active-menu');

    if (target.closest('.menu')) {
      toggleMenu();
      return;
    }

    if ((!itsMenu && menuActive) || target.closest('.close-btn') || (targetClosestLink && menu.contains(target))) {
      menu.classList.remove('active-menu');
      return;
    }

    //кнопка-ссылка в main к блоку услуг
    if (targetClosestLink && mainBlock.contains(target)) {
      e.preventDefault();
      const blockId = targetClosestLink.getAttribute('href');
      scrollView(blockId);
    }

    //кнопки-ссылки в menu
    if (targetClosestLink && menu.contains(target)) {
      e.preventDefault();
      const blockId = target.getAttribute('href');
      scrollView(blockId);
    }
  });
};
export default menu;
