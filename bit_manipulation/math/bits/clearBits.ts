/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 * 
 * ~ = not operator
 * 
 * Input: N = 5, K = 1
 * Output: 4
 * 5 is represented as 101 in binary
 * and has its first bit 1, so clearing
 * it will result in 100 i.e. 4.

 * Input: N = 5, K = 2
 * Output: 5
 * 5 is represented as 101 in binary
 * and has its second bit is already 0,
 * so clearing it will result in 101 i.e. 5. (from geek for geeks)
 * 
 * clearBit에 대한 설명은 위와 같다.
 */

/**
 *
 * input: number = 5, bitPosition = 2
 * output: 1
 * 5 = 101
 * 1 << n은 0001의 1을 n만큼 bit 이동하라는 뜻이다.
 * i.e. 1 << 3 = 1000(bin) = 8(dec)
 *
 * 1 << 2 = 0001 << 2 = 0100 = 4
 *
 * ~(0100) = 1...1111111111111011 = -5
 *
 * 0101(5) & 1011(-5) = 0001(1)
 * 주어진 식은 clear bit한 자리를 나타내려 한 것인지 모르겠다.
 *
 * input: 3, 2
 * output: 3
 *
 * 0011(3)
 * 1 << 2 = 0001 << 2 = 0100 = 4
 * ~4 = -5
 * -5 = 1011
 * 3 & -5 = 0011 & 1011 = 0011 = 3
 *
 *
 */

export default function clearBit(number: number, bitPosition: number) {
  const mask = ~(1 << bitPosition);
  return number & mask;
}
/**
 *
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 *
 * input : number = 5, bitPosition = 1
 * output : 4
 *
 * function 101 clear 1 bit
 * return 100
 *
 */
export function clearBitNonZeroBased(number: number, bitPosition: number) {
  const mask = ~(1 << (bitPosition - 1));
  return number & mask;
}
console.log(clearBit(5, 2)); // 1
console.log(clearBit(5, 2)); // 3
