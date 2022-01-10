// Two sum - https://leetcode.com/problems/two-sum/
let nums = [2, 7, 11, 15];
let target = 9;
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; ++i) {
    for (let i2 = 0; i2 < nums.length; ++i2) {
      if (i !== i2 && nums[i] + nums[i2] === target) {
        return [i, i2];
      }
    }
  }
};

console.log(twoSum(nums, target));
