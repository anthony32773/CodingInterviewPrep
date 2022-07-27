/**
 * Class definition for a stack data structure. Last In First Out (LIFO)
 */
class Stack {
  #stack = [];

  /**
   * Return the top element in the stack and remove it.
   *
   * @returns {number | null}
   */
  pop() {
    if (this.isEmpty()) {
      console.log("The stack is empty");
      return null;
    } else {
      return this.#stack.pop();
    }
  }

  /**
   * Check if the stack is empty.
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.#stack.length === 0;
  }

  /**
   * Add a value to the stack
   * @param {number} value - Number to add to the stack
   * @returns {void}
   */
  push(value) {
    this.#stack.push(value);
  }

  /**
   * Return the top element from the stack without popping it.
   *
   * @returns {number | null}
   */
  peek() {
    if (this.isEmpty()) {
      console.log("The stack is empty!");
      return null;
    }
    return this.#stack[this.#stack.length - 1];
  }

  /**
   * String representation of the stack
   *
   * @returns {void}
   */
  toString() {
    if (this.isEmpty()) {
      console.log("The stack is empty!");
    } else {
      for (let i = this.#stack.length - 1; i >= 0; i--) {
        console.log(this.#stack[i]);
      }
    }
  }
}

const MyStack = new Stack();
MyStack.push(1);
MyStack.push(2);
MyStack.push(3);
MyStack.push(4);
console.log(MyStack.pop());
console.log(MyStack.peek());
MyStack.toString();
