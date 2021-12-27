const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItem = menu.querySelectorAll('ul>li>a[href*="#"]');
  const mainBlock = document.querySelector('main');
  const mainLink = mainBlock.querySelector('a[href*="#"]');
  const scrollScreen = (element) => {
    const blockId = element.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  // ф  закрытия меню
  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  //перебор элементов меню бургер
  menuItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      scrollScreen(item);
      handleMenu();
    });
  });

  //кнопка меню
  menuBtn.addEventListener('click', handleMenu);
  //кнопка закрытия меню
  closeBtn.addEventListener('click', handleMenu);
  // кнопка прокрутки
  mainLink.addEventListener('click', (e) => {
    e.preventDefault();
    scrollScreen(mainLink);
  });
};

export default menu;
