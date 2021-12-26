const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');
  console.log(menuItems);

  // ф  закрытия меню
  const handleMenu = () => {
    if (!menu.style.transform) {
      menu.style.transform = 'translateX(0)';
    } else {
      menu.style.transform = '';
    }
  };

  //кнопка меню
  menuBtn.addEventListener('click', handleMenu);
  //кнопка закрытия меню
  closeBtn.addEventListener('click', handleMenu);
  //перебор
  /*
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', handleMenu);
  }
  */

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', handleMenu);
  });
};

export default menu;
