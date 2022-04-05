/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            // 1. 将左括号入栈，并继续循环，直到遇到右括号
            stack.push(s[i]);
        } else {
            // 2. 如果栈为空，则返回false
            if (stack.length === 0)  return false;
            // 3. 如果栈顶元素与当前元素匹配，则将栈顶元素出栈，并继续循环
            let top = stack.pop();
            // 4. 如果栈顶元素与当前元素不匹配，则返回false
            if (s[i] === ')' && top !== '(') return false;
            if (s[i] === ']' && top !== '[') return false;
            if (s[i] === '}' && top !== '{') return false;
        }
    }
    // 5. 如果栈不为空，则返回false，否则返回true
    return stack.length === 0;
};
// @lc code=end
console.log(isValid('()'));