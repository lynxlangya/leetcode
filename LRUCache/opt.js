class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = null;
    this.tail = null;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key).value;
    this.moveToHead(key);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.get(key).value = value;
      this.moveToHead(key);
      return;
    }
    const node = { key, value, prev: null, next: null };
    this.cache.set(key, node);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    if (this.cache.size > this.capacity) {
      const removedKey = this.tail.key;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.cache.delete(removedKey);
    }
  }

  moveToHead(key) {
    const node = this.cache.get(key);
    if (node === this.head) {
      return;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
}

// 初始化一个容量为100的LRU缓存实例
const cache = new LRUCache(100);

function handleRequest(request) {
  const key = request.params.key;
  let data = cache.get(key);
  if (data !== -1) {
    // 如果缓存中存在数据，则直接返回
    return data;
  }
  // 如果缓存中不存在，则从数据库中获取数据
  data = fetchDataFromDatabase(key);
  // 将数据添加到缓存中
  cache.put(key, data);
  return data;
}
