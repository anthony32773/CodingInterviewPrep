/**
 * Class definition for a node in a doubly linked list
 */
class Node {
  next = null;
  prev = null;
  constructor(value) {
    this.value = value;
  }

  /**
   * String representation of a node
   *
   * @returns {void}
   */
  toString() {
    console.log(
      `Value: ${this.value}\nNext: ${
        this.next === null ? "null" : this.next.value
      }\nPrevious: ${this.prev === null ? "null" : this.prev.value}`
    );
  }
}

/**
 * Class definition for a Doubly Linked List
 */
class DoublyLinkedList {
  head = null;
  tail = null;

  /**
   * String representation of the list. Print each node in order in the list
   * Time complexity: O(N)
   *
   * @returns {void}
   */
  toString() {
    if (this.head === null) {
      console.log("The list is empty!");
    } else {
      let tempPtr = this.head;
      while (tempPtr !== null) {
        tempPtr.toString();
        tempPtr = tempPtr.next;
      }
    }
  }

  /**
   * Inserts a new node at the front of the list
   * Time complexity: O(1)
   *
   * @param {number} value - Value for the new node to be inserted into the list
   * @returns {void}
   */
  insertAtFront(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /**
   * Inserts a new node at the back of the list
   * Time complexity: O(1)
   *
   * @param {number} value - Value for the new node to be inserted into the list
   * @returns {void}
   */
  insertAtBack(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * Removes the first element from the list and returns it
   * Time complexity: O(1)
   *
   * @returns {Node | null}
   */
  popFront() {
    if (this.head === null) {
      console.log("The list is empty!");
      return null;
    }
    const tempPtr = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    return tempPtr;
  }

  /**
   * Removes the last element from the list and returns it
   * Time complexity: O(1)
   *
   * @returns {Node | null}
   */
  popBack() {
    if (this.head === null) {
      console.log("The list is empty!");
      return null;
    }
    const tempPtr = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return tempPtr;
  }

  /**
   * Add a new node after another node in the list. If added return true
   * Time complexity: O(N)
   *
   * @param {number} newValue - Value for the new node
   * @param {number} valueInList - Value for the node to insert after in the list
   * @returns {boolean} - If node was successfully added to the list
   */
  addAfterValue(newValue, valueInList) {
    if (this.head === null) {
      console.log("The list is empty!");
      return false;
    }
    let tempPtr = this.head;
    while (tempPtr !== null) {
      if (tempPtr.value === valueInList) {
        const newNode = new Node(newValue);
        newNode.next = tempPtr.next;
        newNode.prev = tempPtr;
        tempPtr.next = newNode;
        if (newNode.next === null) {
          this.tail = newNode;
        }
        return true;
      }
      tempPtr = tempPtr.next;
    }
    return false;
  }

  /**
   * Insert a new node before a specific node in the list
   * Time complexity: O(N)
   *
   * @param {number} newValue - Value for the new node to be added to the list
   * @param {number} valueInList - Value to of the node to insert the new node before
   * @returns {boolean} - If insertion successful, return true, else return false
   */
  addBeforeValue(newValue, valueInList) {
    if (this.head === null) {
      console.log("The list is empty!");
      return false;
    }
    let tempPtr = this.head;
    while (tempPtr !== null) {
      if (tempPtr.value === valueInList) {
        const newNode = new Node(newValue);
        newNode.next = tempPtr;
        newNode.prev = tempPtr.prev;
        if (newNode.prev === null) {
          this.head = newNode;
        } else {
          tempPtr.prev.next = newNode;
        }
        tempPtr.prev = newNode;
        return true;
      }
      tempPtr = tempPtr.next;
    }
    return false;
  }

  /**
   * Checks if a node exists with a specific value in the list
   * Time complexity: O(N)
   *
   * @param {number} value - value of node to find
   * @returns {boolean}
   */
  find(value) {
    if (this.head === null) {
      console.log("List is empty!");
      return false;
    } else if (this.tail.value === value) {
      return true;
    } else {
      let tempPtr = this.head;
      while (tempPtr.next !== null) {
        if (tempPtr.value === value) {
          return true;
        }
        tempPtr = tempPtr.next;
      }
      return false;
    }
  }
}

const MyLinkedList = new DoublyLinkedList();
MyLinkedList.insertAtFront(1);
MyLinkedList.insertAtFront(2);
MyLinkedList.insertAtFront(3);
MyLinkedList.insertAtFront(4);
MyLinkedList.insertAtBack(10);
MyLinkedList.addBeforeValue(8, 3);
MyLinkedList.addAfterValue(45, 2);
MyLinkedList.addAfterValue(100, 10);
MyLinkedList.popBack();
MyLinkedList.popFront();
console.log(MyLinkedList.find(45));
MyLinkedList.toString();
