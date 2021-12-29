const validationForms = () => {
  const inputsCalc = document.querySelectorAll('.calc-item');

  const inputName = document.querySelectorAll('.form-name');
  const inputPhone = document.querySelectorAll('.form-phone');
  const inputEmail = document.querySelectorAll('.form-email');

  const inputNameBottom = document.querySelector('#form2-name');
  const inputMessageBottom = document.querySelector('#form2-message';

  const customTrim = (val) =>
    val
      .replace(/\s+/g, ' ') //много пробелов в один
      .replace(/-+/g, '-') //много дефисов в один
      .replace(/\(+/g, '(') //много скобок в один
      .replace(/\)+/g, ')') //много скобок в один
      .replace(/^[ |\-+]/g, '') //удаление дефисов и пробелов в начале
      .replace(/[ |\-+]$/g, '') //удаление дефисов и пробелов в конце
      .replace(/@+/g, '@') //много @ в один
      .replace(/\.+/g, '.'); //много ... в один

  // валидация input-ов калькулятора
  inputsCalc.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^\d.]/g, '');
    });
  });
  // валидация ввода имени
  inputName.forEach((input) => {
    input.addEventListener('blur', (e) => {
      let val = e.target.value;
      val = val.replace(/[^а-яё \-]/gi, '');
      val = customTrim(val);
      val = e.target.value.toLowerCase();
      val = val.replace(/( |^|\-)[ а-яё]/g, (u) => u.toUpperCase());
      e.target.value = val;
    });
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^а-яё \-]/gi, '');
    });
  });
  //  валидация ввода почтового адреса
  inputEmail.forEach((input) => {
    input.addEventListener('blur', (e) => {
      let val = e.target.value;
      val = val.replace(/[^A-Za-z-@!.*~']/g, '');
      val = customTrim(val);
      e.target.value = '';
      e.target.value = val;
    });
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^A-Za-z-@!.*~']/g, '');
    });
  });

  //  валидация ввода номера телефона

  inputPhone.forEach((input) => {
    input.addEventListener('blur', (e) => {
      let val = e.target.value;
      val = val.replace(/[^\d-)(]/g, '');
      val = customTrim(val);
      e.target.value = '';
      e.target.value = val;
    });
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^\d-)(]/g, '');
    });
  });

  /// валидация ввода имени нижней формы

  inputNameBottom.addEventListener('blur', (e) => {
    let val = e.target.value;
    val = val.replace(/[^а-яё \-]/gi, '');
    val = customTrim(val);
    val = e.target.value.toLowerCase();
    val = val.replace(/( |^)[ а-яё]/g, (u) => u.toUpperCase());
    e.target.value = val;
  });

  inputNameBottom.addEventListener('input', () => {
    inputNameBottom.value = inputNameBottom.value.replace(/[^а-яё \-]/gi, '');
  });

  /// валидация ввода сообщения
  inputMessageBottom.addEventListener('blur', (e) => {
    let val = e.target.value;
    val = val.replace(/[^а-яё \-]/gi, '');
    val = customTrim(val);
    e.target.value = '';
    e.target.value = val;
  });

  inputMessageBottom.addEventListener('input', () => {
    inputMessageBottom.value = inputMessageBottom.value.replace(/[^а-яё \-]/gi, '');
  });
};

export default validationForms;
