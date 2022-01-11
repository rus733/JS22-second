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
      body: data, // переведем data в строчку
      //body: JSON.stringify(data), // formData не можем превращать в JSON
      headers: {
        'Content-Type': 'multipart/form-data', // при этих условиях не заварачивая в json формат
      },
    }).then((res) => res.json());

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form); // собирает данные со всех элементов формы
    //но только у тех у кого есть аттрибут name="user_form"
    console.log('submit');

    sendData(formData).then((data) => {
      console.log(data);
    });
  });
};

export default sendForm;
