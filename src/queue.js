const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
    }
    else {
      if (this.head.next === null)
        this.head.next = node;
      else {
        let node2 = this.head;
        while (node2.next !== null)
          node2 = node2.next;
        node2.next = node;
      }
    }
  }

  dequeue() {
    let value = null;
    if (this.head !== null) {
      value = this.head;
      if (this.head.next !== null)
        this.head = this.head.next;
      else this.head = null;
    }
    return value.value;
  }
}

module.exports = {
  Queue
};
