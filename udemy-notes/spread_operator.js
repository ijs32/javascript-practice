const arr = [7, 8, 9]; // we want to add to the front of this array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // dumb way of adding
const goodNewArr = [1, 2, ...arr]; // better way

console.log(badNewArr, goodNewArr);
console.log(...goodNewArr);
