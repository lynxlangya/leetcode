// export default (str) => {
//   /** 字符串按空格分割，保存数组 */
//   let arr = str.split(' ')
//   console.log(arr);

//   /** 对数组进行遍历，每个元素反转 */
//   let res = arr.map((item) => {
//     return item.split('').reverse().join('')
//   })
//   return res.join(' ')
// }

/** 优雅一下 */
export default (str) => {
  return str
    .split(' ')
    .map((item) => {
      return item.split('').reverse().join('')
    })
    .join(' ')
}
