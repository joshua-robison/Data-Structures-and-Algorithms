// Data Structures in JavaScript: Binary Search Tree
function BinarySearchTree(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// insert a node (sub-tree) into the binary search tree
BinarySearchTree.prototype.insert = function(data) {
  if (data < this.data) {
    if (!this.left) {
      this.left = new BinarySearchTree(data);
    } else {
      this.left.insert(data);
    }
  } else if (data > this.data) {
    if (!this.right) {
      this.right = new BinarySearchTree(data);
    } else {
      this.right.insert(data);
    }
  } else {
    return null;
  }
};

// check if a value exists in the binary search tree
BinarySearchTree.prototype.contains = function(data) {
  if (data === this.data) {
    return true;
  } else if (data < this.data) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(data);
    }
  } else if (data > this.data) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(data);
    }
  } else {
    return false;
  }
};
