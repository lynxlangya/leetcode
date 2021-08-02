/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  console.log(s);
  /** 长度为1，返回自身 */
  if (s.length === 1) return s;

  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr[i] = [];
  }
  console.log(arr);

  let begin = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let j = 0;
    while (j <= i) {
      if (s[j] == s[i] && (i - j <= 1 || arr[j + 1][i - 1])) {
        arr[j][i] = 1;
        if (i - j + 1 > max) {
          begin = j;
          max = i - j + 1;
        }
      }
      j++;
    }
  }
  console.log(s.substr(begin, max));
  return s.substr(begin, max)
};
// @lc code=end
longestPalindrome('abcdae');
