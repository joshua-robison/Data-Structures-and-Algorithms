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

// depth first search: pre-order, in-order, post-order
BinarySearchTree.prototype.dfs = function(order = "in-order", iterator = log) {
  if (order === "pre-order") {
    iterator(this.data);
  }
  if (this.left) {
    this.left.dfs(order, iterator);
  }
  if (order === "in-order") {
    iterator(this.data);
  }
  if (this.right) {
    this.right.dfs(order, iterator);
  }
  if (order === "post-order") {
    iterator(this.data);
  }
};

// breadth first search
BinarySearchTree.prototype.bfs = function(iterator = log) {
  var queue = [this];
  while (queue.length) {
    var node = queue.shift();
    iterator(node.data);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

// minimum value from bst
BinarySearchTree.prototype.minimum = function() {
  if (this.left) {
    return this.left.minimum();
  } else {
    return this.data;
  }
}

// maximum value from bst
BinarySearchTree.prototype.maximum = function() {
  if (this.right) {
    return this.right.maximum();
  } else {
    return this.data;
  }
}

// iterator function
function log(data) {
  console.log(data);
}
