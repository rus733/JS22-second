const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li>a');

  // ф  закрытия меню
  const handleMenu = () => {
    /*active-menu
    if (!menu.style.transform) {
      menu.style.transform = 'translateX(0)';
    } else {
      menu.style.transform = '';
    }
    */
    menu.classList.toggle('active-menu');
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

  menuItems.forEach((menuItem) => menuItem.addEventListener('click', handleMenu));
};

export default menu;
