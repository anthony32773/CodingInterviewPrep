const Queue = require("../../../Queue/JavaScript/Queue");
class Node {
  data;
  left = null;
  right = null;

  constructor(data) {
    this.data = data;
  }
}

class BinaryTree {
  #root = null;

  /**
   * Inserts a new node into the tree using level order traversal.
   * 1. Check root if empty insert at root
   * 2. Check left and if left is empty insert left
   * 3. Check right and if right is empty insert right
   *
   * Uses a queue to add each node to the list to check:
   * Push root onto the queue
   * output value. Then push left onto queue if there is a left and then push right if there is a right
   * with each iteration dequeue which will maintain the order from the level we are on
   * @param {number} value - Value for a new node to insert into the tree
   * 
   * @returns {void}
   */
  insert(value) {
    const newNode = new Node(value);
    if (this.#root === null) {
      this.#root = newNode;
    } else {
      const tempQueue = new Queue();
      tempQueue.enqueue(this.#root);
      while (!tempQueue.isEmpty()) {
        const tempNode = tempQueue.dequeue();
        if (tempNode.left === null) {
          tempNode.left = newNode;
          break;
        } else {
          tempQueue.enqueue(tempNode.left);
        }

        if (tempNode.right === null) {
          tempNode.right = newNode;
          break;
        } else {
          tempQueue.enqueue(tempNode.right);
        }
      }
    }
  }

  /**
   * Traverse and print the tree using level order traversal
   * Print each level of the tree
   */
  levelOrderTraversal() {
    if (this.#root === null) {
      console.log("The tree is empty!");
    } else {
      const tempQueue = new Queue();
      tempQueue.enqueue(this.#root);
      while (!tempQueue.isEmpty()) {
        const tempNode = tempQueue.dequeue();
        console.log(tempNode.data);
        if (tempNode.left !== null) {
          tempQueue.enqueue(tempNode.left);
        }
        if (tempNode.right !== null) {
          tempQueue.enqueue(tempNode.right);
        }
      }
    }
  }

  inOrderTraversal(tempNode = this.#root) {
    if (tempNode !== null) {
        this.inOrderTraversal(tempNode.left);
        console.log(tempNode.data);
        this.inOrderTraversal(tempNode.right);
    }
  }

  preOrderTraversal(tempNode = this.#root) {
    if (tempNode !== null) {
        console.log(tempNode.data);
        this.preOrderTraversal(tempNode.left);
        this.preOrderTraversal(tempNode.right);
    }
  }

  postOrderTraversal(tempNode = this.#root) {
    if (tempNode !== null) {
        this.postOrderTraversal(tempNode.left);
        this.postOrderTraversal(tempNode.right);
        console.log(tempNode.data);
    }
  }
}

const MyTree = new BinaryTree();
MyTree.insert(1);
MyTree.insert(3);
MyTree.insert(4);
MyTree.insert(8);
MyTree.insert(9);
console.log('Level order traversal');
MyTree.levelOrderTraversal();
console.log('In order traversal');
MyTree.inOrderTraversal();
console.log('Pre order traversal');
MyTree.preOrderTraversal();
console.log('Post order traversal');
MyTree.postOrderTraversal();