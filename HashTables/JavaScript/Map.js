// STL Map which acts like a hash table:
// Map docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const MyMap = new Map();

MyMap.set('key1', 7382);
MyMap.set('key2', 'test');
MyMap.set('key3', 111);

console.log(MyMap.get('key2'));
console.log(MyMap.has('key3'));
MyMap.delete('key3');