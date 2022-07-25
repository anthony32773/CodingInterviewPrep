type ListNode = SingleNode | null;

/**
 * Class to represent a node in a singly linked list
 */
class SingleNode {
  constructor(public value: number, public next: SingleNode | null = null) {}

  /**
   * Display string representation of a node
   *
   * @returns {void}
   */
  public stringify(): void {
    console.log(`Value: ${this.value}`);
    console.log(`Next: ${this.next}`);
  }
}

/**
 * Class to represent a signly linked list
 */
class SinglyLinkedList {
  public head: ListNode;

  constructor() {
    this.head = null;
  }

  /**
   * Add a new node to the front of the list
   * @param {number} value - Value for new node
   *
   * @returns {void}
   */
  public addToFront(value: number): void {
    const newNode = new SingleNode(value);
    if (this.head !== null) {
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  /**
   * Add a new node to the back of the list
   * @param {number} value - Value for new node
   *
   * @returns {void}
   */
  public addToBack(value: number): void {
    const newNode = new SingleNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let tempPtr: ListNode = this.head;
      while (tempPtr.next !== null) {
        tempPtr = tempPtr?.next;
      }
      tempPtr.next = newNode;
    }
  }

  /**
   * Insert a new node after a specific node. If not found do not insert
   * @param {number} newValue - Value for a new node to be inserted
   * @param {number} afterValue - Value of a node to find in the list
   * 
   * @returns {void}
   */
  public addAfter(newValue: number, afterValue: number): void {
    if (this.head === null) {
      console.log("The list is empty!");
    } else {
      const newNode = new SingleNode(newValue);
      let tempPtr = this.head;
      while (tempPtr !== null) {
        if (tempPtr.value === afterValue) {
          newNode.next = tempPtr.next;
          tempPtr.next = newNode;
          return;
        }
      }
      console.log("The node to insert after does not exist!");
    }
  }

  /**
   * Removes the first element from the list and returns it
   * 
   * @returns {ListNode}
   */
  public popFront(): ListNode {
    if (this.head === null) {
      console.log("The list is empty!");
      return null;
    }
    const tempNode: ListNode = this.head;
    this.head = this.head.next;
    return tempNode;
  }

  /**
   * Removes the last element from the list and returns it
   * 
   * @returns {ListNode}
   */
  public popBack(): ListNode {
    if (this.head === null) {
      console.log("The list is empty!");
      return null;
    }
    let tempPtr: ListNode = this.head;
    let prev: ListNode = null;
    while (tempPtr.next !== null) {
      prev = tempPtr;
      tempPtr = tempPtr.next;
    }
    if (prev) {
      prev.next = null;
    }
    return tempPtr;
  }

  /**
   * Print all nodes in the linked list in order
   *
   * @returns {void}
   */
  public printList(): void {
    if (this.head === null) {
      console.log("The list is empty!");
    } else {
      let tempPtr: ListNode = this.head;
      while (tempPtr !== null) {
        tempPtr.stringify();
        tempPtr = tempPtr?.next;
      }
    }
  }

  /**
   * Check if a node is in the list
   * @param {number} valueToFind - Value of a node to find in the list
   * 
   * @returns {Boolean}
   */
  public find(valueToFind: number): Boolean {
    if (this.head === null) {
      console.log("The list is empty!");
      return false;
    }
    let tempPtr = this.head;
    while (tempPtr !== null) {
      if (tempPtr.value === valueToFind) {
        return true;
      }
    }
    return false;
  }
}
