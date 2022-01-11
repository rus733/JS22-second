const sendForm = (idForm) => {
  const form = document.getElementById(idForm);

  // создадим не пустой обьект
  const user = {
    name: ' Álex',
    age: 24,
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

    const formData = new FormData(form); // собирает данные со всех элементов формы
    //но только у тех у кого есть аттрибут name="user_form"

    // соберем данные из new FormData(form)
    // создадим пустой обьект и заполним его forEach
    const formBody = {};
    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    //console.log('submit');

    sendData(formBody).then((data) => {
      // и отправляем formBody
      console.log(data);
    });
  });
};

export default sendForm;
