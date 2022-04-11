/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 原地算法：https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95
 * 思路：
 * 1. 循环遍历数组，如果当前元素不等于val, 则将当前元素放到i位置，i++
 * 2. 如果当前元素等于val, 则i不变，j++
 * 3. 循环结束，j的值就是移除的元素的个数，i的值就是需要保留的元素的个数
 * 
 * ps: 如果不考虑原地算法限制，filter 就可以实现
 * return nums.filter(item => item !== val).length
 */
var removeElement = function (nums, val) {
    let i = 0;
    let j = 0;
    while (j < nums.length) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;
};
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
// @lc code=end
