const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type'); // тип помещения
  const calcSquare = document.querySelector('.calc-square'); // квадратура
  const calcCount = document.querySelector('.calc-count'); //количество помещений
  const calcDay = document.querySelector('.calc-day'); //сроки в днях
  const total = document.querySelector('#total'); //сумма

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0; // итого
    let calcCountValue = 1; // количество помещений

    if (calcType.value && calcSquare.value && calcCount.value) {
      //console.log(price * calcTypeValue * calcSquareValue);
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue;
    } else {
      totalValue = 0;
    }
    total.textContent = totalValue;
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
