const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItem = menu.querySelectorAll('ul>li>a[href*="#"]');
  const mainBlock = document.querySelector('main');
  const mainLink = mainBlock.querySelector('a[href*="#"]');

  // ф  закрытия меню
  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  //кнопка меню
  menuBtn.addEventListener('click', handleMenu);
  //кнопка закрытия меню
  closeBtn.addEventListener('click', handleMenu);

  //перебор элементов меню бургер

  menuItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const blockId = item.getAttribute('href');
      document.querySelector(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      handleMenu();
    });
  });

  mainLink.addEventListener('click', (e) => {
    e.preventDefault();
    const blockId = mainLink.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};

export default menu;
