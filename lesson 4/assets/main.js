/**
 * Метод возвращающий случайный элемент массива
 * @param {array} array
 */
function getRandomEl(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Изменить цвет элемента
 */
function changeColor() {
  // массив доступных цветов
  const arrayColors = ['red', 'blue', 'green', 'yellow', 'teal', 'black', 'aquamarine'];
  // выбираем случайный цвет
  const el = getRandomEl(arrayColors);
  // обращаемся к элементу в DOM вереве
  const placeholder = document.getElementById('placeholder');
  placeholder.style.backgroundColor = el;
}

/**
 * Приветствие пользователя
 */
function sayHello() {
  const input = document.getElementById('user-name');
  const userName = input.value;
  alert('Привет ' + userName);
}

function sumEl() {
  debugger;
  const input = document.getElementById('sum-el');
  let elements = input.value;
  elements = elements.split(' ');
  let sum = 0;
  elements.forEach((item) => {
    debugger;
    sum = Number(sum) + Number(item);
  });
  console.log(elements);
  alert('Сумма чисел равна: ' + sum);
}
