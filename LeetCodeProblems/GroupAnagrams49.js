// Problem: https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function(strs) {
    const myMap = new Map();
    let counter = 0;
    let result = [];
    for (let i = 0 ; i < strs.length ; i++) {
        const sortedString = strs[i].split('').sort().toString();
        const tempValue = myMap.get(sortedString);
        if (tempValue === undefined) {
            result.push([strs[i]]);
            myMap.set(sortedString, counter);
            counter++;
        } else {
            result[tempValue].push(strs[i]);
        }
    }
    return result;
};

var groupAnagrams = function(strs) {
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));