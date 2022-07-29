class HashTable {
  #table = new Array(10);
  #size = 10;
  #collisionMethod;

  constructor(collisionMethod) {
    this.#collisionMethod = collisionMethod;
  }

  #hashFunction(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return (sum * 3) % this.#size;
  }

  addToTable(key, value) {
    const index = this.#hashFunction(key);
    if (this.#table[index]) {
      this.#collisionHandler(key, value, index);
    } else {
      if (this.#collisionMethod === "chaining") {
        this.#table[index] = [[key, value]];
      } else {
        this.#table[index] = [key, value];
      }
    }
  }

  #collisionHandler(key, value, index) {
    switch (this.#collisionMethod) {
      case "chaining":
        this.#chaining(key, value, index);
      case "linear probing":
        this.#linearProbing(key, value, index);
      case "quadratic probing":
        this.#quadraticProbing(key, value, index);
      case "double hashing":
        this.#doubleHashing(key, value, index);
      default:
        console.log("No valid collision handler");
    }
  }

  #chaining(key, value, index) {
    this.#table[index].push([key, value]);
  }

  #linearProbing(key, value, index) {
    let offset = 1;
    while (true) {
      const newIndex = (index + offset) % this.#size;
      if (!this.#table[newIndex]) {
        this.#table[newIndex] = [key, value];
        return newIndex;
      }
      offset++;
    }
  }

  #quadraticProbing(key, value, index) {
    const c1 = 13;
    const c2 = 17;
    let offset = 1;
    while (true) {
      const newIndex = (index + c1 + offset * offset * c2) % this.#size;
      if (!this.#table[newIndex]) {
        this.#table[newIndex] = [key, value];
        return newIndex;
      }
      offset++;
    }
  }

  #doubleHashing(key, value, index) {
    let offset = 1;
    while (true) {
      const newIndex =
        (index + offset * this.#secondHashFunction(key)) % this.#size;
      if (!this.#table[newIndex]) {
        this.#table[newIndex] = [key, value];
        return newIndex;
      }
      offset++;
    }
  }

  #secondHashFunction(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return (sum * 19) % this.#size;
  }

  getValue(key) {
    let initialHash = this.#hashFunction(key);
    if (this.#collisionMethod === "chaining") {
      for (let i = 0; i < this.#table[initialHash].length; i++) {
        if (this.#table[initialHash][i][0] === key) {
          return this.#table[initialHash][i][1];
        }
      }
      return null;
    } else if (this.#collisionMethod === "linear probing") {
      if (this.#table[initialHash][0] === key) {
        return this.#table[initialHash][1];
      }
      let offset = 1;
      while (true) {
        const newIndex = (initialHash + offset) % this.#size;
        if (this.#table[newIndex][0] === key) {
          return this.#table[newIndex][1];
        }
      }
    } else if (this.#collisionMethod === "quadratic probing") {
      if (this.#table[initialHash][0] === key) {
        return this.#table[initialHash][1];
      }
      let offset = 1;
      const c1 = 13;
      const c2 = 17;
      while (true) {
        const newIndex = (initialHash + c1 + offset * offset * c2) % this.#size;
        if (this.#table[newIndex][0] === key) {
          return this.#table[newIndex][1];
        }
      }
    } else {
      if (this.#table[initialHash][0] === key) {
        return this.#table[initialHash][1];
      }
      let offset = 1;
      while (true) {
        const newIndex =
          (initialHash + offset * this.#secondHashFunction(key)) % this.#size;
        if (this.#table[newIndex][0] === key) {
          return this.#table[newIndex][1];
        }
        offset++;
      }
    }
  }

  toString() {
    console.log(this.#table);
  }
}
