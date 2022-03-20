const list = [1, 2, 3, 4, [5, 6, [7, 8, [9, 10]]]];

console.log(list.flat());

const words = ['Hello World', 'Hello JS'];

/** 
 * flatMap: 返回一个新的数组，其中包含了原数组中的所有元素，并且把原数组中的元素展开为多个元素。
 * 
 */
console.log(words.flatMap((word) => word.split(' '))); // [ 'Hello', 'World', 'Hello', 'JS' ]
