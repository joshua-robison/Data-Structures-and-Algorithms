// Data Structures in JavaScript: Linked List
function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

// node in the linked list
function Node(data, next, prev) {
  this.data = data;
  this.next = next;
  this.prev = prev;
}

// add new node to head of linked list
LinkedList.prototype.addToHead = function(data) {
  let node = new Node(data, this.head, null);
  if (this.head) {
    this.head.prev = node;
  } else {
    this.tail = node;
  }
  this.head = node;
  this.length++;
};

// add new node to tail of linked list
LinkedList.prototype.addToTail = function(data) {
  let node = new Node(data, null, this.tail);
  if (this.tail) {
    this.tail.next = node;
  } else {
    this.head = node;
  }
  this.tail = node;
  this.length++;
};

// remove head from linked list
LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null;
  }
  var data = this.head.data;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  this.length--;
  return data;
};

// remove tail from linked list
LinkedList.prototype.removeTail = function() {
  if (!this.tail) {
    return null;
  }
  var data = this.tail.data;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  this.length--;
  return data;
};

// search linked list for data
LinkedList.prototype.search = function(data) {
  var node = this.head;
  while (node) {
    if (node.data == data) {
      return node;
    } else {
      node = node.next;
    }
  }
  return null;
};

// get indices of linked list data
LinkedList.prototype.indexOf = function(data) {
  var indices = new Array();
  var index = 0;
  var node = this.head;
  while (node) {
    if (node.data == data) {
      indices.push(index);
    }
    node = node.next;
    index++;
  }
  return indices;
};
