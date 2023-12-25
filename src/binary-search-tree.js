const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let node = new Node(data);
    if (this.rootNode === null)
      this.rootNode = node;
    else
      this.insert(this.rootNode, node);
  }
  insert(root, node) {
    if (node.data < root.data) {
      if (root.left === null)
        root.left = node;
      else
        this.insert(root.left, node);
    } else {
      if (root.right === null)
        root.right = node;
      else
        this.insert(root.right, node);
    }
  }

  has(data) {
    if (this.rootNode === null) return false;
    let tree = this.rootNode;
    while (tree !== null) {
      if (tree.data === data) return true;
      else if (tree.data < data)
        tree = tree.right;
      else tree = tree.left;
    }
    return false;
  }

  find(data) {
    if (this.rootNode === null) return null;
    let tree = this.rootNode;
    while (tree !== null) {
      if (tree.data === data) return tree.data;
      else if (tree.data < data)
        tree = tree.right;
      else tree = tree.left;
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (this.rootNode !== null) {
      let tree = this.rootNode;
      while (tree.left !== null) {
        tree = tree.left;
      }
      return tree.data;
    }
    else return null;
  }

  max() {
    if (this.rootNode !== null) {
      let tree = this.rootNode;
      while (tree.right !== null) {
        tree = tree.right;
      }
      return tree.data;
    }
    else return null;
  }
}
module.exports = {
  BinarySearchTree
};