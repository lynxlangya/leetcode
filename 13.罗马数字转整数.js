/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const hashMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    const next = s[i+1];
    if (hashMap[cur] < hashMap[next]) {
      num -= hashMap[cur];
    } else {
      num += hashMap[cur];
    }
  }
  return num;
};
// @lc code=end

