// Problem: https://leetcode.com/problems/contains-duplicate/

// Runtime: O(n*log (n))
// Space Complexity: O(n)
var containsDuplicate = function (nums) {
  if (nums.length === 1) {
    return false;
  }
  const numSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      return true;
    }
    numSet.add(nums[i]);
  }
  return false;
};
