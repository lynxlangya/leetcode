/** 
 * Map 是一组键值对的结构，具有极快查找速度
 */

const list = [1, 3, 4, 6, 7];
const target = 10;
function twoSum(ls, target) {
  const MAP = new Map();
  for (let i = 0, len = ls.length; i < len; i++) {
    if (MAP.has(target - ls[i])) {
      return [MAP.get(target - ls[i]), i]
    }
    console.log(ls[i], i);
    MAP.set(ls[i], i)
  }
}

twoSum(list, target)
