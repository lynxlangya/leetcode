/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 思路：
 * 1. needle 为空，返回 0。haystack 为空，返回 -1
 * 2. 定义两个辅助变量，分别记录 haystack 和 needle 的第一个字符的位置
 * 3. 如果 needle 的索引大于 haystack 的长度，返回 -1
 * 4. 如果 haystack 中没有找到 needle 字符，将j设置为0
 * 5. 如果 haystack 中找到 needle 字符，将 i+1
 * 6. 如果 needle 的索引值等于needle的长度，返回 haystack 的索引值
 */
var strStr = function(haystack, needle) {
    if (!needle) return 0;
    if (!haystack) return -1;
    let i = 0;
    let j = 0;
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            if (j === needle.length) return i - j;
        } else {
            i = i - j + 1;
            j = 0;
        }
    }
    return -1;
};
console.log(strStr('hello', 'lo'));
// @lc code=end

