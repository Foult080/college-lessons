// Классические циклы
// Циклы с пост и пред условием
// While
const myArray = [10, 12, 'hello', 'world'];
// function cycleWhile(array) {
//   console.log('While');
//   let i = 0;
//   while (i < array.length) {
//     console.log(array[i]);
//     i = i + 1;
//   }
// }
// cycleWhile(myArray);

// // Do While
// function cycleDoWhile(array) {
//   console.log('Do While');
//   let i = 0;
//   do {
//     console.log(array[i]);
//     i = i + 1;
//   } while (i < array.length);
// }
// cycleDoWhile(myArray);

// // For
// function cycleFor(array) {
//   console.log('For');
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
// cycleFor(myArray);

// Новые инструменты перебора элементов
// For Of
function cycleForOF(array) {
  console.log('For OF');
  for (let item of array) {
    console.log(item);
  }
}
cycleForOF(myArray);

// ForEach
function cycleForEach(array) {
  console.log('For Each');
  array.forEach((item) => {
    console.log(item);
  });
}
cycleForEach(myArray);

// Map
function cycleMap(array) {
  console.log('Map');
  array.map((item) => {
    console.log(item);
  });
}
cycleMap(myArray);

// Reduce
function checkReduce(array) {
  console.log('MaReduce');
  const result = array.reduce(function (sum, current) {
    return sum + current;
  }, 0);
  console.log(result);
}
checkReduce(myArray);

// Every
const arr = [1, -1, 2, -2, 3];
function isPositive(number) {
  return number > 0;
}
console.log(arr.every(isPositive)); // false, не все положительные
console.log(arr.some(isPositive)); // true, есть хоть одно положительное
