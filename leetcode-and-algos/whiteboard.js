// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
// function multiples(num) {
//   let multiples = 0;
//   for (let i = 0; i < num; i++) {
//     if (i % 3 === 0) {
//       multiples += i;
//     } else if (i % 5 === 0) {
//       multiples += i;
//     }
//   }
//   return multiples;
// }

// console.log(multiples(10));

// Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

// let arr = ["a", "b", "c", "d"];
// // Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

// function pairs(arr) {
//   let pairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let i2 = 0; i2 < arr.length; i2++) {
//       if (arr[i] !== arr[i2]) {
//         pairs.push(arr[i] + arr[i2]);
//       }
//     }
//   }
//   return pairs;
// }

// console.log(pairs(arr));

// let string1 = "ABCDEFG";
// let string2 = "ABCDEEE";

// function charsDifferent(string1, string2) {
//   let count = 0;
//   for (let i = 0; i < string2.length; i++) {
//     if (string1[i] !== string2[i]) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(charsDifferent(string1, string2));
