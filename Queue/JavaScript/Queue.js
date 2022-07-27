/**
 * Class definition for a Queue data structure
 */
class Queue {
  #queue = [];

  /**
   * Add a number to the queue
   *
   * @param {number} value - Number to add to the queue
   * @returns {void}
   */
  enqueue(value) {
    this.#queue.push(value);
  }

  /**
   * Remove a number from the queue
   *
   * @returns {number | null}
   */
  dequeue() {
    if (this.isEmpty()) {
      console.log("The queue is empty!");
      return null;
    }
    // this.#queue.shift();
    // const test = this.#queue.shift();
    return this.#queue.shift();
  }

  /**
   * Checks if the queue is empty
   * @returns {boolean}
   */
  isEmpty() {
    return this.#queue.length === 0;
  }

  /**
   * Get the number at the front of the queue
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
