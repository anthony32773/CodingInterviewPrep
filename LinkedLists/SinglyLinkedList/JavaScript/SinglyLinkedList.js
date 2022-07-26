/**
 * Class definition for a node in a singly linked list
 */
class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }

  /**
   * String representation of a node
   *
   * @returns {void}
   */
  toString() {
    console.log(`Value: ${this.value}\nNext: ${this.next}`);
  }
}

/**
 * Class definition for a Singly Linked List
 */
class SinglyLinkedList {
  head = null;

  /**
   * Insert a node at the front of the list
   * @param {number} value - Value for the node to be created
   */
  insertAtFront(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /**
   * Insert a node at the back of the list
   * @param {number} value - Value for the node to be created
   */
  insertAtBack(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let tempPtr = this.head;
      while (tempPtr.next !== null) {
        tempPtr = tempPtr.next;
      }
      tempPtr.next = newNode;
    }
  }

  /**
   * Remove the first element from the list and returns it
   *
   * @returns {Node | null}
   */
  popFront() {
    if (this.head === null) {
      console.log("List is empty!");
      return null;
    } else {
      const frontValue = this.head;
      this.head = this.head.next;
      return frontValue;
    }
  }

  /**
   * Remove the last element from the list and returns it
   *
   * @returns {Node | null}
   */
  popBack() {
    if (this.head === null) {
      console.log("List is empty!");
      return null;
    } else {
      let tempPtr = this.head.next;
      let prevPtr = this.head;
      while (tempPtr.next !== null) {
        prevPtr = tempPtr;
        tempPtr = tempPtr.next;
      }
      const lastValue = prevPtr;
      prevPtr.next = null;
      return lastValue;
    }
  }

  /**
   * Print each node in order in the list
   *
   * @returns {void}
   */
  printList() {
    if (this.head === null) {
      console.log("List is empty!");
    } else {
      let tempPtr = this.head;
      while (tempPtr !== null) {
        console.log(tempPtr.value);
        tempPtr = tempPtr.next;
      }
    }
  }

  /**
   * Checks if a node exists with a specific value in the list
   *
   * @param {number} value - value of node to find
   * @returns {boolean}
   */
  find(value) {
    if (this.head === null) {
      console.log("List is empty!");
      return false;
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

  /**
   * Add a new node after another node in the list. If added return true
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
        tempPtr.next = newNode;
        return true;
      }
      tempPtr = tempPtr.next;
    }
    return false;
  }

  /**
   * Insert a new node before a specific node in the list
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
    let prev = null;
    while (tempPtr !== null) {
      if (tempPtr.value === valueInList) {
        const newNode = new Node(newValue);
        newNode.next = tempPtr;
        prev.next = newNode;
        return true;
      }
      prev = tempPtr;
      tempPtr = tempPtr.next;
    }
    return false;
  }
}

const MyLinkedList = new SinglyLinkedList();
MyLinkedList.insertAtFront(1);
MyLinkedList.insertAtFront(2);
MyLinkedList.insertAtFront(3);
MyLinkedList.insertAtFront(4);
MyLinkedList.addAfterValue(8, 2);
MyLinkedList.addBeforeValue(10, 3);
console.log(MyLinkedList.find(4));
MyLinkedList.popBack();
MyLinkedList.popFront();
MyLinkedList.insertAtBack(45);
MyLinkedList.printList();