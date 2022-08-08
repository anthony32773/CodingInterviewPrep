/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    let tempArr = s.split('');
    let twoK = 2 * k;
    if (tempArr.length < k) {
        return tempArr.reverse().join('');
    } else if (tempArr.length < twoK) {
        tempArr.splice(0, k, ...tempArr.slice(0, k).reverse());
        return tempArr.join('');
    } else {
        for (let i = 0 ; i < tempArr.length ; i = i + (2 * k)) {
            const tempSlice = tempArr.slice(i, i + twoK);
            if (tempArr.length < k) {
                tempArr.splice(i, k, ...tempSlice.reverse());
            } else {
                tempArr.splice(i, k, ...tempSlice.slice(0, k).reverse());
            }
        }
        return tempArr.join('');
    }
};

console.log(reverseStr("abcd", 3));