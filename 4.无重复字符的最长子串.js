/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */

const s = 'ababcda';
function lengthOfLongestSubstring(str) {
  // let min = 0;
  // let ans = 0;
  // for (let i = 0; i < str.length; i++) {
  //   console.log(str.indexOf(str[i]), min);
  //   if(str.indexOf(str[i], min) < i) {
  //     // console.log(str);
  //     min = str.indexOf(str[i], min) + 1
  //   } else {
  //     ans = Math.max(ans, i - min + 1)
  //     // console.log(ans);
  //   }
  // }

  let arr = [];
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let index = arr.indexOf(str[i]);
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(str.charAt(i));
    max = Math.max(arr.length, max);
  }
  console.log(max); // 4
}

lengthOfLongestSubstring(s);
