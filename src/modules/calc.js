const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.querySelector('#total');

  const countCalc = () => {
    //const calcTypeValue = calcType;
    console.dir(calcType.options[calcType.selectedIndex]);
  };

  calcBlock.addEventListener('input', e => {
    //console.log(e.target);
    if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
      countCalc();
      //console.log(e.target);
    }
  });
};

export default calc;
