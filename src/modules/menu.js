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
    } else if (target.closest('.close-btn')) {
      toggleMenu();
    } else if (target.closest('a[href*="#"]') && mainBlock.contains(target)) {
      e.preventDefault();
      const blockId = target.closest('a[href*="#"]').getAttribute('href');
      scrollView(blockId);
      //document.querySelector(blockId).scrollIntoView({
      // behavior: 'smooth',
      //block: 'start',
      //});
    } else if (target.closest('a[href*="#"]') && menu.contains(target)) {
      e.preventDefault();
      const blockId = target.getAttribute('href');
      scrollView(blockId);
      //document.querySelector(blockId).scrollIntoView({
      // behavior: 'smooth',
      //block: 'start',
      //});
      toggleMenu();
    } else if (!itsMenu && menuActive) {
      toggleMenu();
    }
  });
};
export default menu;
