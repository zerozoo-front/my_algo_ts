export default class Comparator {
  /**
   * Constructor
   * @param {function(a:(string|number), b:(string|number) )}[compareFunction]  - It may be custom compare function that,
   *  let's say may compare custom objects together
   *
   */
  compare: (a: string | number, b: string | number) => number;
  constructor(
    compareFunction: (a: string | number, b: string | number) => 0 | 1 | -1
  ) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * Default comparison function. It just assumes that
   * "a" and "b" are strings or numbers
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @return {number}
   */
  static defaultCompareFunction(
    a: string | number,
    b: string | number
  ): number {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }

  /**
   * Checks if two variables are equal.
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @return {boolean}
   */
  equal(a: string | number, b: string | number): boolean {
    return this.compare(a, b) === 0;
  }

  /**
   * Checks if variable "a" is less than "b".
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @return {boolean}
   */
  lessThan(a: string | number, b: string | number): boolean {
    return this.compare(a, b) < 0;
  }

  /**
   *
   * Checks if variable "a" is greater than "b"
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @return {boolean}
   */
  greaterThan(a: string | number, b: string | number): boolean {
    return this.compare(a, b) > 0;
  }

  /**
   * Checks if variable "a" is less than or equal to "b".
   * @param {string|number} a
   * @param {string|number} b
   * @return {boolean}
   */
  lessThanOrEqual(a: string | number, b: string | number): boolean {
    return this.lessThan(a, b) || this.equal(a, b);
  }
  /**
   * Checks if variable "a" is greater than or equal to "b".
   * @param {string|number} a
   * @param {string|number} b
   * @return {boolean}
   */
  greaterThanOrEqual(a: string | number, b: string | number): boolean {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  /**
   * Reverses the comparison order.
   * @return {void}
   */
  reverse(): void {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
