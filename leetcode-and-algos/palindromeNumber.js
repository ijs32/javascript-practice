// Palindrome number - https://leetcode.com/problems/palindrome-number/
var isPalindrome = function (x) {
  x = String(x);
  let reverseArr = [];
  for (let i = x.length; i >= 0; i--) {
    reverseArr.push(x[i]);
  }
  console.log(x === reverseArr.join(""));
};

isPalindrome(-121);
