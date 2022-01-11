const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  // coplflbv новый блок  и неск вариантов текста извещений  при отправке данных
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка ...';
  const errorText = 'Ошибка ...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется'; // идем в обработчик события submit

  const validate = (list) => {
    // при каждом submit , проверим наличие класса .success на наших input-ах ,
    //если  хотябы на одном не будет этого класса ,
    // то validate вернет false  и отправка
    // не произойдет sendData(formBody).then((data) =>
    let success = true; // создадим переменную
    //console.log('validate', list);

    return success; // и возвращаем значение success
  };

  const sendData = (data) =>
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      ///body: data, // переведем data в строчку
      //body: JSON.stringify(data), // formData не можем превращать в JSON
      body: JSON.stringify(data), // при отправке formBody заворачиваем в data в json'
      headers: {
        //'Content-Type': 'multipart/form-data', // при этих условиях не заварачивая в json формат
        'Content-Type': 'application/json', // при отправке formBody заворачиваем в 'application/json'
      },
    }).then((res) => res.json());

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = form.querySelectorAll('input'); // передадим в ф. validate  полученный  nodeList
    const formData = new FormData(form); // собирает данные со всех элементов формы
    //но только у тех у кого есть аттрибут name="user_form"

    // соберем данные из new FormData(form)
    // создадим пустой обьект и заполним его forEach
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock); // блок появится в конце  form  при отправке
    formData.forEach((val, key) => {
      formBody[key] = val;
    });
    // можем делать перебор второго импортируемого аргумента someElem =[]
    someElem.forEach((elem) => {
      console.log(elem); //увидим содержание переданного аргументом someElem
      // можем получит элемент по идентификатору и вытащить его текст содержимое если его тип блок или span
      // или value если тип input
      // получим этот элемент
      const elemetn = document.getElementById(elem.id);
      console.log(elemetn);
      if (elem.type === 'block') {
        formBody[elem.id] = elemetn.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = elemetn.value;
      }
    });
    console.log('submit');
    // нужно сделать проверку  правильности заполнения форм перед отправкой
    //console.log(form.querySelectorAll('input')); // найдем внутри формы все элементы инпут и передадим в validate();

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          // и отправляем formBody
          //console.log(data);
          statusBlock.textContent = successText; // при успешной загрузке сменим текст

          formElements.forEach((input) => {
            //добавим очистку полей input после отправки
            input.value = '';
          });
        })
        .catch((error) => {
          // добавим обработку ошибки методом catch
          statusBlock.textContent = errorText;
        });
    } else {
      alert('Данные не валидны !!!');
    }
  });
};

export default sendForm;
