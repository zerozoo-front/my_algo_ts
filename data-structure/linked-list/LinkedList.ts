import LinkedListNode from './LinkedListNode';
import Comparator from '../../util/Comparator';

export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */

  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  compare: Comparator;

  constructor(
    comparatorFunction: (a: string | number, b: string | number) => 0 | 1 | -1
  ) {
    /** @var LinkedListNode */
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value: string | number | null = null): LinkedListNode | string {
    // Make new node to be a head.
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
}
