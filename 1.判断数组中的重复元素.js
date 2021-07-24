/**
 * 暴力解法
 * 最坏的情况下，重复值出现在数组的末尾，将会遍历整个数组，效率较低
 */
let arr = [1, 2, 3, 4];

// bad
let containsDuplicateBad = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (arr.indexOf(value) !== -1) {
      return true;
    }
    arr.push(value);
  }
  return false;
};
console.log(containsDuplicateBad(arr));

/**
 * Set 对象是值的集合。您可以按插入顺序遍历集合的元素。集合中的值只能出现一次；它在Set的集合中是唯一的。
 * Set 这种数据结构非常适合求数组的交集、并集、差集
 * leetcode 目前还不识别 Set
 */
// good
let containsDuplicateGood = function (nums) {
  return new Set(nums).length !== nums.length;
};
console.log(containsDuplicateBad(arr));

/**
 * 查看两个数组中是否有重复交集
 * bool 为空数组则无交集
 * 不为空则有交集, 数组中包含该交集值
 */
const a = [1, 2, 3, 4];
const b = [4, 5, 6, 7];
function insertion(a, b) {
  a = new Set(a);
  b = new Set(b);
  const bool = [...a].filter((item) => {
    return b.has(item);
  });
  return bool;
}
console.log(insertion(a, b));
