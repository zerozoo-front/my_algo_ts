type Values = string | number | null | LinkedListNode;
export default class LinkedListNode {
  value: string | number | null | LinkedListNode;
  next: string | number | null | LinkedListNode;
  constructor(value: Values, next: Values) {
    this.value = value;
    this.next = next;
  }

  toString(callback: (arg0: string | number | null | LinkedListNode) => any) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
