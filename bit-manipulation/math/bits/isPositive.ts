/**
 *
 * 8 bit로 설명해보자.
 *
 * 32 bit를 기준으로 하는 정수이므로
 * 0000 0000 0000 0000
 * 0000 0000 0000 0001 = 1
 *
 * >> 는 맨 왼쪽 비트의 복사본을 만들면서 이동합니다.
 * 1100 >> 1 = 1110
 *
 * 따라서
 *
 * 11111111 11111111
 * 11111111 11111011 >> 31
 * =
 * 11111111 11111111
 * 11111111 11111111 === 1 : false
 *
 *
 * 음수이면 가장 왼쪽의 비트가 1이므로
 * bit shift를 31번 하였을 때 그 값이 1이 아니면
 * bit shift를 하면서 복제된 값이 전부 1이라는 것이므로
 * 해당 param은 음수이다.
 * @param {number} number -32-bit integer.
 * @return {boolean}
 */

export default function isPositive(number: number): boolean {
  if (number === 0) {
    return false;
  }
  return ((number >> 31) & 1) === 0;
}

console.log(isPositive(-5));
console.log(isPositive(5));
