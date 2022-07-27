/**
 * Class definition for a Queue data structure
 */
class Queue {
  #queue = [];

  /**
   * Add a number to the queue
   * Time complexity: O(1)
   *
   * @param {number} value - Number to add to the queue
   * @returns {void}
   */
  enqueue(value) {
    this.#queue.push(value);
  }

  /**
   * Remove a number from the queue
   * Time complexity: O(N)
   *
   * @returns {number | null}
   */
  dequeue() {
    if (this.isEmpty()) {
      console.log("The queue is empty!");
      return null;
    }
    return this.#queue.shift();
  }

  /**
   * Checks if the queue is empty
   * Time complexity: O(1)
   * 
   * @returns {boolean}
   */
  isEmpty() {
    return this.#queue.length === 0;
  }

  /**
   * Get the number at the front of the queue
   * Time complexity: O(1)
   *
   * @returns {number | null}
   */
  peek() {
    if (this.isEmpty()) {
      console.log("The queue is empty!");
      return null;
    }
    return this.#queue[0];
  }

  /**
   * A string representation of the queue
   * Time complexity: O(N)
   *
   * @returns {void}
   */
  toString() {
    if (this.isEmpty()) {
      console.log("The queue is empty!");
    } else {
      for (let i = 0; i < this.#queue.length; i++) {
        console.log(this.#queue[i]);
      }
    }
  }
}

const MyQueue = new Queue();
MyQueue.enqueue(1);
MyQueue.enqueue(2);
MyQueue.enqueue(3);
MyQueue.enqueue(4);
console.log(MyQueue.dequeue());
console.log(MyQueue.peek());
MyQueue.toString();
