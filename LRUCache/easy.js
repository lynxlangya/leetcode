/**
 * 简单版 LRU 缓存
 */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    if (this.cache.size === this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}

const cache = new LRUCache(2);

cache.put('key1', 'value1');
cache.put('key2', 'value2');
console.log(cache.get('key1')); // 输出：value1
cache.put('key3', 'value3');
console.log(cache.get('key2')); // 输出：-1
cache.put('key4', 'value4');
console.log(cache.get('key1')); // 输出：-1
console.log(cache.get('key3')); // 输出：value3
console.log(cache.get('key4')); // 输出：value4

// 使用场景 --------------------------------------------

const cache1 = new LRUCache(100); // 创建一个容量为100的LRU缓存

async function fetchData(url) {
  if (cache1.has(url)) {
    // 如果该资源已经存在于缓存中
    return Promise.resolve(cache1.get(url)); // 直接返回缓存中的数据
  } else {
    // 否则从服务器获取数据
    const response = await fetch(url);
    const data = await response.json();
    cache1.set(url, data); // 将数据添加到缓存中
    return data;
  }
}

fetchData('https://example.com/data.json')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
