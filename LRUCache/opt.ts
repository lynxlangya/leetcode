interface CacheNode {
  key: number;
  value: number;
  prev: CacheNode | null;
  next: CacheNode | null;
}

class LRUCacheOpt {
  private capacity: number;
  private cache: Map<number, CacheNode>;
  private head: CacheNode | null;
  private tail: CacheNode | null;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = null;
    this.tail = null;
  }

  /**
   * 获取缓存中的值
   * @param key 缓存的键
   * @returns 缓存的值，如果不存在则返回 -1
   */
  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }
    const value = this.cache.get(key)!.value;
    this.moveToHead(key);
    return value;
  }

  /**
   * 设置缓存
   * @param key 缓存的键
   * @param value 缓存的值
   */
  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.get(key)!.value = value;
      this.moveToHead(key);
      return;
    }
    const node: CacheNode = { key, value, prev: null, next: null };
    this.cache.set(key, node);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head!.prev = node;
      this.head = node;
    }
    if (this.cache.size > this.capacity) {
      const removedKey = this.tail!.key;
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      this.cache.delete(removedKey);
    }
  }

  /**
   * 将缓存中的节点移动到头部
   * @param key 缓存的键
   */
  private moveToHead(key: number): void {
    const node = this.cache.get(key)!;
    if (node === this.head) {
      return;
    }
    if (node === this.tail) {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
    } else {
      node.prev!.next = node.next;
      node.next!.prev = node.prev;
    }
    node.prev = null;
    node.next = this.head;
    this.head!.prev = node;
    this.head = node;
  }
}
