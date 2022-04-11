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
 */
var removeElement = function (nums, val) {
    let i = 0;
    let j = 0;
    // 循环遍历数组，如果当前元素不等于val，则将当前元素放到i的位置，并且i++
    // 如果当前元素等于val，则j++
    // 循环结束后，j的值就是需要移除的元素的个数。i的值就是需要保留的元素的个数
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
