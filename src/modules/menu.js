const menu = () => {
  const menu = document.querySelector('menu');
  const scrollView = (id) => {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  document.body.addEventListener('click', (e) => {
    const target = e.target;
    const closestLink = target.closest('a[href*="#"]');
    const closestMenu = target.closest('menu');

    if (target.closest('.menu') || target.closest('.close-btn')) {
      menu.classList.toggle('active-menu');
      return;
    }
    // клик мимо меню или по ссылке
    if (!closestMenu || closestLink) menu.classList.remove('active-menu');

    //скрол кнопка-ссылка в main или кнопка-ссылка в меню
    if (closestLink && (closestLink.closest('main') || closestMenu)) {
      e.preventDefault();
      scrollView(closestLink.getAttribute('href'));
    }
  });
};
export default menu;
