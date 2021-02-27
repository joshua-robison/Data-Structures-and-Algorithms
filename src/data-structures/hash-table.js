// Data Structures in JavaScript: Hash Table
function HashTable(size) {
  this.buckets = new Array(size);
  this.storage = this.buckets.length;
}

// constructor
function HashNode(key, value, next = null) {
  this.key = key;
  this.value = value;
  this.next = next;
}

// hash function
HashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.storage;
  return bucket;
};

// insert or update node in hash table
HashTable.prototype.insert = function(key, value) {
  var bucket = this.hash(key);
  if (!this.buckets[bucket]) {
    this.buckets[bucket] = new HashNode(key, value);
  } else if (this.buckets[bucket].key === key) {
    this.buckets[bucket].value = value;
  } else {
    var node = this.buckets[bucket];
    while (node.next) {
      if (node.next.key === key) {
        node.next.value = value;
        return;
      }
      node = node.next;
    }
    node.next = new HashNode(key, value);
  }
};

// get data from hash table
HashTable.prototype.get = function(key) {
  var bucket = this.hash(key);
  if (!this.buckets[bucket]) {
    return null;
  } else {
    var node = this.buckets[bucket];
    while (node) {
      if (node.key === key) {
        return node.value;
      }
      node = node.next;
    }
    return null;
  }
};

// retrieve all hash table nodes
HashTable.prototype.all = function() {
  var nodes = new Array();
  for (var i = 0; i < this.storage; i++) {
    var node = this.buckets[i];
    while (node) {
      nodes.push(node);
      node = node.next;
    }
  }
  return nodes;
};
