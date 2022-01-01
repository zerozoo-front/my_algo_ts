import countSetBits from './countSetBits';

/**
 *
 * Counts the number of bits that need to be change in order
 * to convert numberA to numberB
 * @countSetBits return countSetBits(number:number):number
 * @param {number} numberA
 * @param {number} numberB
 * @return {number} */

/**
 * 5: 0101
 * 3: 0011
 * -------
 * ^: 0110
 * 까지 연산한 다음,
 * set되어 있는 bits의 숫자를 센다.
 * 따라서 1이 두 개 set되었으므로 값은 2이다.
 */
export default function bitsDiff(numberA: number, numberB: number): number {
  return countSetBits(numberA ^ numberB);
}
console.log(bitsDiff(3, 5));
