const arr = [2, 3, 4];

const [x, y, z] = arr;
console.log(x); // will print '2'

const restaurant = {
  name: "classico italiano",
  location: "blah blah",
  categories: ["italian", "pizzeria", "vegetarian"],
  starterMenu: ["bread", "focaccia"],
  mainMenu: ["Pizza", "pasta", "risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [main, secondary] = restaurant.categories;

[main, secondary] = [secondary, main]; // swapping variables
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(0, 2); // destructure the function return
console.log(starter, mainCourse);

const nested = [2, 3, [5, 6]];
const [i, , [j, k]] = nested; // nested destructuring
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9]; // set default values
