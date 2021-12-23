import decToBin from './decToBin';
/**
 * Return the number of bits used in the binary representation of the number.
 *
 * @param {number} number
 * @return {number}
 *
 */

export default function bitLength(number: number): number {
  let bitsCounter = 0;
  while (1 << bitsCounter <= number) {
    bitsCounter += 1;
  }
  return bitsCounter;
}

console.log(bitLength(1));
console.log(bitLength(2));
console.log(bitLength(3));
console.log(bitLength(4));

/**
 * bitLength(2)인 경우
 * # 1
 * (1<<0 <= 2) : 좌변 = 0001 (dec: 1) <= 2
 * bitLength = 1
 *
 * # 2
 * (1<<1 <= 2) : 좌변 = 0010 (dec: 2) <= 2
 * bitLength = 2
 * return bitLength;
 *  return 2 = (0010) bitLength = 2
 * ---
 *
 * bitLength(3)인 경우
 * # 1
 * (1<<0 <= 3) : 좌변 = 0001 (dec: 1) <=  우변 = 3
 * bitLength = 1
 *
 * # 2
 * (1<<1 <= 3) : 좌변 = 0010 (dec: 2) <= 우변 = 3
 * bitLength = 2
 *
 * # 3
 * (1<<2 <= 3) : 좌변 = 0100 (dec: 4) <= 우변 = 3
 *
 * return bitLength = 2
 *
 */
