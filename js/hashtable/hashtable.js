let LinkedListMaster = require('../data-structure/linked_list');
let LinkedList = LinkedListMaster.ll;


class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    //
    let sum = key.split('')
      .reduce((acc, value) => {
        return acc + value.charCodeAt(0);
      }, 0);

    return (sum * 599) % this.size;
  }

  add(key, value) {
    let hash = this.hash(key); //the index of our bucket
    if (!this.buckets[hash]) {
      this.buckets[hash] = new LinkedList();
    }

    let data = { [key]: value };
    this.buckets[hash].insert(data);

  }

  contains(key) {
    let hash = this.hash(key);
    return !!this.buckets[hash];
  }

  get(key) {
    let hash = this.hash(key);
    if (this.buckets[hash]) {
      return this.buckets[hash].head.value[key];
    } else {
      return null;
    }
  }
  find(key) {
    let hash = this.hash(key);
    if (this.buckets[hash]) {
      return this.buckets[hash].head;
    } else {
      return null;
    }
  }
}

module.exports = HashTable;