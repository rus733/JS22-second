const tabs = () => {
  const tabPanel = document.querySelector('.service-header');
  const tabs = document.querySelectorAll('.service-header-tab');
  const tabContent = document.querySelectorAll('.service-tab');
  tabPanel.addEventListener('click', (e) => {
    //console.log(e.target.closest('.service-header-tab'));
    // чтобы активировать спаны у  которых нет класса .service-header-tab , применим метод closest()
    // заменим условие в проверке  на новое условие с методом e.target.closest('.service-header-tab')
    if (e.target.closest('.service-header-tab')) {
      //e.target по прежнему является span ? нам нужно создать переменную и записать в нее метод
      //e.target.closest('.service-header-tab')
      const tabBtn = e.target.closest('.service-header-tab');
      //console.log(tabBtn);
      // console.log(e.target);
      tabs.forEach((tab, index) => {
        //console.log(tab, index);
        if (tab === tabBtn) {
          //заменим в условии e.target на переменную tabBtn , все переключается
          //console.log(tab, index);
          tab.classList.add('active');
          tabContent[index].classList.remove('d-none');
        } else {
          tab.classList.remove('active');
          tabContent[index].classList.add('d-none');
        }
      });
    }
  });
};
export default tabs;
