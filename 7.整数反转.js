/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * 32位的有符号整数
 * https://blog.csdn.net/weixin_42429956/article/details/112141991
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  while (x) {
    res = res * 10 + (x % 10);
    if (res > 2147483647 || res < -2147483647) return 0;
    x = parseInt(x / 10);
    console.log(x);
  }
  return res;
};
console.log(reverse(1230));
// @lc code=end
