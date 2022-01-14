// Write a function that accepts an array of numbers and returns an array with each number increased by 7.
// Example:
let input = [1, 2, 3];
// Output: [8, 9, 10]
function addSeven(array) {
  return array.map(function (int) {
    return int + 7;
  });
}

console.log(addSeven(input));

// Write a function that accepts an array of strings and returns an array with each string's length.
// Example:
let input2 = ["hello", "goodbye"];
// Output: [5, 7]

function stringLength(array) {
  return array.map(function (string) {
    return string.length;
  });
}

console.log(stringLength(input2));

// Write a function that accepts an array of numbers and returns an array with each number divided by 2.
// Example:
let input3 = [1, 2, 3];
// Output: [0.5, 1.0, 1.5];
function halfNumber(array) {
  return array.map(function (int) {
    return int / 2;
  });
}

console.log(halfNumber(input3));

// Write a function that accepts an array of strings and returns an array with each string's first letter only.
// Example:
let input4 = ["hello", "goodbye"];
// Output: ["h", "g"]
function firstLetter(array) {
  return array.map(function (string) {
    return string[0];
  });
}

console.log(firstLetter(input4));

// Write a function that accepts an array of numbers and returns an array with each number converted into a string.
// Example:
let input5 = [1, 2, 3];
// Output: ["1", "2", "3"]

function convertToString(array) {
  return array.map(function (num) {
    return String(num);
  });
}

console.log(convertToString(input5));

// Write a function that accepts an array of numbers and returns a new array with only the even numbers.
// Example:
let input6 = [2, 4, 5, 1, 8, 9, 7];
// Output: [2, 4, 8]

function onlyEvens(arr) {
  return arr.map(function (num) {
    if (num % 2 === 0) {
      return num;
    }
  });
}

console.log(onlyEvens(input6));
// get the fibonacci number that corresponds to the number input
//  input = 1 / 2 / 3 / 4
// output = 0 / 1 / 1 / 2

function fibonacciNumbers(n) {
  let fibonacciNumbers = [0, 1];
  let i = 1;
  while (fibonacciNumbers.length < n) {
    fibonacciNumbers.push(fibonacciNumbers[i] + fibonacciNumbers[i - 1]);
    i++;
  }
  return fibonacciNumbers[n - 1];
}

console.log(fibonacciNumbers(5));
