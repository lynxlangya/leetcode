/** 
 * Map 是一组键值对的结构，具有极快查找速度
 * interface Map<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    readonly size: number;
  }
 */

const list = [1, 3, 4, 6, 7];
const target = 10;
function twoSum(ls, target) {
  const MAP = new Map();
  for (let i = 0, len = ls.length; i < len; i++) {
    if (MAP.has(target - ls[i])) {
      return [MAP.get(target - ls[i]), i]
    }
    MAP.set(ls[i], i)
  }
}

twoSum(list, target)

/** Map  */
const m = new Map();
m.set('mars', 18)
m.set('mars', 19)
m.set('wang', 20)
console.log(m.get('mars'));  // 19
console.log(m.get('wang'));  // 20
console.log(m.has('mars'));  // true
console.log(m.size);  // 2
m.delete('mars')