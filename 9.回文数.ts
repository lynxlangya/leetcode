/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 * 回文数：反转后的数字和原数字相同
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const str = x.toString().split('').reverse().join('');
  if (str === x.toString()) return true;
  return false;
};
// @lc code=end

