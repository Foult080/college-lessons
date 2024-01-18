/**
 * Метод возвращающий случайный элемент массива
 * @param {array} array
 */
function getRandomEl(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function changeColor() {
  debugger;
  const arrayColors = ['teal', 'red', 'black', 'green'];
  const color = getRandomEl(arrayColors);
  const placeholder = document.getElementById('placeholder');
  placeholder.style.backgroundColor = color;
}

function sayHello() {
  const input = document.getElementById('user-name');
  const name = input.value;
  alert('Привет ' + name);
  console.log('Привет ' + name);
}

function sumEl() {
  const input = document.getElementById('sum-el');
  let numbers = input.value;
  console.log(numbers);
  numbers = numbers.split(' ');
  console.log(numbers);
  let sum = 0;
  numbers.forEach((element) => {
    sum = Number(sum) + Number(element);
  });
  alert('Сумма чисел равна: ' + sum);
}
