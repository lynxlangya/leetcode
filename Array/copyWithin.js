const a = [1, 2, 3, 4, 5];

/**
 * copyWithin: 拷贝数组中的元素，并且把它们放在新数组中的指定位置。
 * @param {Number} target: 指定要把第一个元素放在哪个位置。
 * @param {Number} start: 指定要复制的第一个元素的索引。
 * @param {Number} end: 指定拷贝到哪个位置结束。
 * @description: 改变原数组。数组长度不变。
 */

const b = a.copyWithin(2, 1, 5);
console.log(a);
console.log(b);
