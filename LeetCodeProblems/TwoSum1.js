// Problem: https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    const tempMap = new Map();
    for (let i = 0 ; i < nums.length ; i++) {
        const temp = target - nums[i];
        const tempHash = tempMap.get(temp);
        if (tempHash !== undefined) {
            return [i, tempHash];
        }
        tempMap.set(nums[i], i);
    }
};