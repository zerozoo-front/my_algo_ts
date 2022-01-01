/**
 * @param {number} number
 * @return {number}
 */

/**
 *  3 / 2 = 1
 *  0011(3) >> 1 = 0001 (1)
 *  0100(4) >> 1 = 0010 (2)
 *  0101(5) >> 1 = 0010 (2)
 *  0110(6) >> 1 = 0011 (3)
 */

export default function divideByTwo(number: number): number {
  return number >> 1;
}
