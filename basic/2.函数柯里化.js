/**
 * 函数柯里化
 * 用途：将多参数的函数转换成一个单参数的函数，并且每次调用函数时，都只需传入一个参数，而不需要传入所有的参数。
 * 降低通用性，提高灵活性、适用性
 */

const list = [
  { name: '张三', age: 18 },
  { name: '李四', age: 20 },
  { name: '王五', age: 22 },
];

const prop = (key) => (obj) => obj[key];

const names = list.map(prop('name'));
console.log(names);

const ages = list.map(prop('age'));
console.log(ages);
