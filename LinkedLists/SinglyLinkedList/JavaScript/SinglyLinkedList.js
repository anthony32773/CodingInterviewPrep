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
   * Time complexity: O(1)
   *
   * @returns {void}
   */
  toString() {
    console.log(
      `Value: ${this.value}\nNext: ${
        this.next === null ? "null" : this.next.value
      }`
    );
  }
}

/**
 * Class definition for a Singly Linked List
 */
class SinglyLinkedList {
  #head = null;

  /**
   * Insert a node at the front of the list
   * Time complexity: O(1)
   *
   * @param {number} value - Value for the node to be created
   * @returns {void}
   */
  insertAtFront(value) {
    let newNode = new Node(value);
    if (this.#head === null) {
      this.#head = newNode;
    } else {
      newNode.next = this.#head;
      this.#head = newNode;
    }
  }

  /**
   * Insert a node at the back of the list
   * Time complexity: O(N)
   *
   * @param {number} value - Value for the node to be created
   * @returns {void}
   */
  insertAtBack(value) {
    let newNode = new Node(value);
    if (this.#head === null) {
      this.#head = newNode;
    } else {
      let tempPtr = this.#head;
      while (tempPtr.next !== null) {
        tempPtr = tempPtr.next;
      }
      tempPtr.next = newNode;
    }
  }

  /**
   * Remove the first element from the list and returns it
   * Time complexity: O(1)
   *
   * @returns {Node | null}
   */
  popFront() {
    if (this.#head === null) {
      console.log("List is empty!");
      return null;
    } else {
      const frontValue = this.#head;
      this.#head = this.#head.next;
      return frontValue;
    }
  }

  /**
   * Remove the last element from the list and returns it
   * Time complexity: O(N)
   *
   * @returns {Node | null}
   */
  popBack() {
    if (this.#head === null) {
      console.log("List is empty!");
      return null;
    } else {
      let tempPtr = this.#head.next;
      let prevPtr = this.#head;
      while (tempPtr.next !== null) {
        prevPtr = tempPtr;
        tempPtr = tempPtr.next;
      }
      const lastValue = tempPtr;
      prevPtr.next = null;
      return lastValue;
    }
  }

  /**
   * String representation of the list. Print each node in order in the list
   * Time complexity: O(N)
   *
   * @returns {void}
   */
  toString() {
    if (this.#head === null) {
      console.log("List is empty!");
    } else {
      let tempPtr = this.#head;
      while (tempPtr !== null) {
        tempPtr.toString();
        tempPtr = tempPtr.next;
      }
    }
  }

  /**
   * Checks if a node exists with a specific value in the list
   * Time complexity: O(N)
   *
   * @param {number} value - value of node to find
   * @returns {boolean}
   */
  find(value) {
    if (this.#head === null) {
      console.log("List is empty!");
      return false;
    } else {
      let tempPtr = this.#head;
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
   * Time complexity: O(N)
   *
   * @param {number} newValue - Value for the new node
   * @param {number} valueInList - Value for the node to insert after in the list
   * @returns {boolean} - If node was successfully added to the list
   */
  addAfterValue(newValue, valueInList) {
    if (this.#head === null) {
      console.log("The list is empty!");
      return false;
    }

    let tempPtr = this.#head;
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
   * Time complexity: O(N)
   *
   * @param {number} newValue - Value for the new node to be added to the list
   * @param {number} valueInList - Value to of the node to insert the new node before
   * @returns {boolean} - If insertion successful, return true, else return false
   */
  addBeforeValue(newValue, valueInList) {
    if (this.#head === null) {
      console.log("The list is empty!");
      return false;
    }
    if (this.#head.value === valueInList) {
      const newNode = new Node(newValue);
      newNode.next = this.#head;
      this.#head = newNode;
      return true;
    }
    let tempPtr = this.#head;
    while (tempPtr.next !== null) {
      if (tempPtr.next.value === valueInList) {
        const newNode = new Node(newValue);
        newNode.next = tempPtr.next;
        tempPtr.next = newNode;
        return true;
      }
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
MyLinkedList.addBeforeValue(20, 4);
MyLinkedList.addAfterValue(8, 2);
MyLinkedList.addBeforeValue(10, 3);
MyLinkedList.addBeforeValue(25, 4);
console.log(MyLinkedList.find(4));
MyLinkedList.popBack();
MyLinkedList.popFront();
MyLinkedList.insertAtBack(45);
MyLinkedList.toString();
