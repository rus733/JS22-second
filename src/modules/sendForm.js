import { preload, done, errorForm } from './helpers';
const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо, наш менеджер с вами свяжется';

  let checkItem;

  const validate = (list) => {
    let success = true;
    if (!checkItem) checkItem = (event) => validate([event.target]);
    const setInvalid = (item) => {
      success = false;
      item.style.backgroundColor = 'lightcoral';
      item.addEventListener('input', checkItem);
    };

    list.forEach((item) => {
      item.style.backgroundColor = 'lightgreen';
      item.removeEventListener('input', checkItem);
      if (item.classList.contains('form-email')) {
        if (!item.value.match(/.+@.+\..+/gi)) {
          setInvalid(item);
        }
      } else if (item.classList.contains('form-phone')) {
        if (!item.value.match(/^(\+7|7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/gi)) {
          setInvalid(item);
          //
        }
      } else if (item.classList.contains('form-name') || item.classList.contains('top-form')) {
        if (!item.value.match(/^[а-яА-Я][а-яА-Я- ]+[а-яА-Я]?$/g)) {
          setInvalid(item);
        }
      } else if (item.classList.contains('mess')) {
        if (item.value.match(/[a-zA-Z'][a-zA-Z']+[a-zA-Z']?$/gi)) {
          setInvalid(item);
        }
      } else if (item.value === '') {
        setInvalid(item);
      }
    });

    return success;
  };

  function unBlockBody() {
    const body = document.body;
    body.style.overflow = 'auto';
    body.style.marginRight = `0`;
  }

  const sendData = async (data) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await res.json();
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    statusBlock.style.color = 'white';

    if (validate(formElements)) {
      if (form.contains(done)) {
        form.removeChild(done);
      }

      if (form.contains(errorForm)) {
        form.removeChild(errorForm);
      }
      if (form.contains(preload)) {
        form.removeChild(preload);
      }

      form.append(statusBlock);
      form.append(preload);
    }

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          form.removeChild(preload);
          form.append(done);
          statusBlock.textContent = successText;

          formElements.forEach((input) => {
            input.value = '';
            input.style.backgroundColor = '';
          });

          setTimeout(() => {
            form.removeChild(done);
            form.removeChild(statusBlock);
          }, 5000);
          const modal = document.querySelector('.popup');
          setTimeout(() => {
            modal.style.display = 'none';
            unBlockBody();
          }, 4000);
        })
        .catch((error) => {
          form.removeChild(preload);
          form.append(errorForm);
          statusBlock.textContent = errorText;

          setTimeout(() => {
            form.removeChild(errorForm);
            form.removeChild(statusBlock);
          }, 5000);
        });
    }
    //else {
    //alert('Данные не валидны!');
    // }
  };

  try {
    if (!form) {
      throw new Error('Верните форму на место, пожалуйста!');
    }
    form.addEventListener(
      'invalid',
      (event) => {
        event.preventDefault();
        validate([event.target]);
      },
      true
    );
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
