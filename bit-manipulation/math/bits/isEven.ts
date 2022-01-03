/**
 * @param {number} number
 * @return {boolean}
 */

/**
 * 0101 5
 * 0001
 * ----
 * 0001 === 0 (false) odd
 *
 * 0110 6
 * 0001
 * -----
 * 0000 === 0 (true): even
 *
 * 0111 7
 * 0001
 * ----
 * 0001 === 0 (false): odd
 * 즉 2^0 자리의 bit가 1인 경우 n_0+n_1+n_2...4+2+1에서 1이 true이 경우
 * 앞에서 나온 모든 짝수의 합에 1이 더해져 홀수가 된다
 *
 */
export default function isEven(number: number): boolean {
  return (number & 1) === 0;
}
