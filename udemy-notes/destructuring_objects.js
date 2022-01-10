const restaurant = {
  name: "classico italiano",
  location: "blah blah",
  categories: ["italian", "pizzeria", "vegetarian"],
  starterMenu: ["bread", "focaccia"],
  mainMenu: ["Pizza", "pasta", "risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex, time = 22, address }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
restaurant.orderDelivery({
  time: 22,
  address: "something street 20",
  mainIndex: 2,
  starterIndex: 1,
});
restaurant.orderDelivery({
  address: "something street 20",
  mainIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
