const menu = () => {
  const menu = document.querySelector('menu');
  //const mainBlock = document.querySelector('main');

  //const toggleMenu = () => {
  //menu.classList.toggle('active-menu');
  //};

  const scrollView = (id) => {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  document.body.addEventListener('click', (e) => {
    const target = e.target;
    const closestLink = target.closest('a[href*="#"]');
    const itsMenu = target == menu || menu.contains(target);
    const menuActive = menu.classList.contains('active-menu');

    if (target.closest('.menu') || target.closest('.close-btn')) {
      menu.classList.toggle('active-menu');
      return;
    }

    if ((!itsMenu && menuActive) || (closestLink && menu.contains(target))) {
      menu.classList.remove('active-menu');
      return;
    }

    //кнопка-ссылка в main к блоку услуг
    if (closestLink && mainBlock.contains(target)) {
      e.preventDefault();
      const blockId = closestLink.getAttribute('href');
      scrollView(blockId);
    }

    //кнопки-ссылки в menu
    if (closestLink && menu.contains(target)) {
      e.preventDefault();
      const blockId = target.getAttribute('href');
      scrollView(blockId);
    }
  });
};
export default menu;
