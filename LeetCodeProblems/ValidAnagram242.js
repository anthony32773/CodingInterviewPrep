// Problem: https://leetcode.com/problems/valid-anagram/

// Using frequency mapping
var isAnagram = function(s, t) {
    if (s.length === t.length) {
        const sMap = new Map();
        const tMap = new Map();
        for (let i = 0 ; i < s.length ; i++) {
            const tempS = sMap.get(s.charAt(i));
            const tempT = tMap.get(t.charAt(i));
            if (tempS) {
                sMap.set(s.charAt(i), tempS + 1);
            } else {
                sMap.set(s.charAt(i), 1);
            }
            if (tempT) {
                tMap.set(t.charAt(i), tempT + 1);
            } else {
                tMap.set(t.charAt(i), 1);
            }
        }
        const sIter = sMap.entries();
        let temp = sIter.next();
        while (!temp.done) {
            if (temp.value[1] !== tMap.get(temp.value[0])) {
                return false;
            }
            temp = sIter.next();
        }
        return true;
    }
    return false;
};

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    return s.split('').sort().toString() === t.split('').sort().toString();
}
console.log(isAnagram('anagram', 'nagaram'));