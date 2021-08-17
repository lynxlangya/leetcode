/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill('');
  const period = 2 * numRows - 2;
  for (let i = 0; i < s.length; i++) {
    rows[Math.min(i % period, period - (i % period))] += s[i];
  }
  return rows.join('');
};
console.log(convert('HELLO_WORLD', 3)); // HOREL_OLLWD
// @lc code=end
