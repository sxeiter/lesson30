const calc = (price = 100) => {

  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    calcCount = document.querySelector('.calc-count'),
    totalValue = document.getElementById('total');

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1,
      count = 0;

    const typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;

      let id = setInterval(() => {
        count += total / 249;


        if (count > total) {
          clearInterval(id);
          totalValue.textContent = total;
        } else {
          totalValue.textContent = Math.floor(count);
        }

      }, 1);
    }
    return Math.floor(countSum);
  };















  calcBlock.addEventListener('change', (event) => {

    const target = event.target;

    if (target.matches('select') || target.matches('input')) {
      countSum();
    }
  });

  calcBlock.addEventListener('input', (event) => {

    const target = event.target;

    if (target.placeholder) {
      target.value = target.value.replace(/\D/g, '');
    }
  });
};

export default calc;